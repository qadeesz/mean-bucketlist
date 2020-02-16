import { Component, OnInit } from "@angular/core";
import { List } from "../models/list";
import { ListService } from "../list.service";

@Component({
  selector: "app-view-list",
  templateUrl: "./view-list.component.html",
  styleUrls: ["./view-list.component.css"]
})
export class ViewListComponent implements OnInit {
  public lists: List[] = [];

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.loadLists();
  }

  // Get all lists from server and update the lists property
  private loadLists() {
    this.listService.getAllLists().subscribe(lists => {
      this.lists = lists;
    });
  }

  // The deleted list is being filtered out using the .filter method
  public deleteList(listToDelete: List) {
    this.listService.deleteList(listToDelete._id).subscribe(() => {
      this.lists = this.lists.filter(list => list !== listToDelete);
    });
  }

  // onAddList will be invoked when the child component emits an event
  public onAddList(newList) {
    this.loadLists();
  }
}
