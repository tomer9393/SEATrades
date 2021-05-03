import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationStart } from "@angular/router";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.css"],
})
export class EventsListComponent implements OnInit {
  listFor: String;
  Concerts: String = "Concerts";
  Festivals: String = "Festivals";
  Sport: String = "Sport";
  StandUp: String = "StandUp";
  Theatre: String = "Theatre";
  search: String = "";
  refresh: string = "false";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.listFor = "";
  }

  ngOnInit() {
    this.search = "";
    this.search = history.state;
  }

  onSearch(search: String) {
    this.search = search;
    if (this.search === "") this.listFor = "";
    else this.listFor = "search";
  }

  onRefresh() {
    this.refresh = "true";
    setTimeout(() => {
      this.refresh = "false";
    }, 5000);

  }
}
