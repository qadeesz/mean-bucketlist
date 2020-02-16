import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { List } from "../models/list";
import { ListService } from "../list.service";

@Component({
  selector: "app-add-list",
  templateUrl: "./add-list.component.html",
  styleUrls: ["./add-list.component.css"]
})
export class AddListComponent implements OnInit {
  public newList: List;
  @Output() addList: EventEmitter<List> = new EventEmitter();
  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  private resetForm() {
    this.newList = {
      title: "",
      category: "",
      description: "",
      _id: ""
    };
  }

  public onSubmit() {
    this.listService.addList(this.newList).subscribe(response => {
      if (response.success === true) {
        this.addList.emit(this.newList);
        this.resetForm();
      }
    });
  }
}
