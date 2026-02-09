import Array "mo:core/Array";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Char "mo:core/Char";
import Int "mo:core/Int";
import Blob "mo:core/Blob";

actor {
  type Coordinates = {
    latitude : Float;
    longitude : Float;
  };

  type Location = {
    address : Text;
    coordinates : Coordinates;
  };

  type ReportMetadata = {
    id : Text;
    timestamp : Time.Time;
    languageCode : Text;
    status : Text;
  };

  type MediaMetadata = {
    format : Text;
    size : Nat;
    data : Text;
  };

  type AIAnalysisResult = {
    incidentType : Text;
    severity : Text;
    confidenceScore : Nat;
  };

  type EmergencyReport = {
    metadata : ReportMetadata;
    media : [MediaMetadata];
    location : Location;
    aiAnalysis : ?AIAnalysisResult;
  };

  module EmergencyReport {
    public func compare(report1 : EmergencyReport, report2 : EmergencyReport) : Order.Order {
      Text.compare(report1.metadata.id, report2.metadata.id);
    };
  };

  let reports = Map.empty<Text, EmergencyReport>();

  public shared ({ caller }) func createReport(reportId : Text, languageCode : Text, timestamp : Time.Time) : async () {
    let metadata = {
      id = reportId;
      languageCode;
      timestamp;
      status = "new";
    };
    let report : EmergencyReport = {
      metadata;
      media = [];
      location = {
        address = "unknown";
        coordinates = {
          latitude = 0.0;
          longitude = 0.0;
        };
      };
      aiAnalysis = null;
    };
    reports.add(reportId, report);
  };

  public query ({ caller }) func getReport(reportId : Text) : async EmergencyReport {
    switch (reports.get(reportId)) {
      case (null) { Runtime.trap("Report " # reportId # " does not exist") };
      case (?report) { report };
    };
  };

  public query ({ caller }) func getAllReports() : async [EmergencyReport] {
    reports.values().toArray().sort(); // implicitly uses EmergencyReport.compare
  };
};
