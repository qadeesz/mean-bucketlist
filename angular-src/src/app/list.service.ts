import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { List } from "./models/list";
import { Observable } from "rxjs";

const apiUrl = "http://localhost:3000";

@Injectable({
  providedIn: "root"
})
export class ListService {
  constructor(private http: HttpClient) {}

  public getAllLists(): Observable<List[]> {
    const url = `${apiUrl}/bucketlist/`;
    return this.http
      .get<{ lists: List[] }>(url)
      .pipe(map(response => response.lists));
  }

  public deleteList(listId: string) {
    const url = `${apiUrl}/bucketlist/${listId}`;
    return this.http.delete(url);
  }

  public addList(list: List): Observable<{ success: boolean }> {
    const url = `${apiUrl}/bucketlist/`;
    return this.http.post<{ success: boolean }>(url, list);
  }
}
