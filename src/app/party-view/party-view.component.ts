import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Party } from '../model/partyModel';

@Component({
  selector: 'app-party-view',
  templateUrl: './party-view.component.html',
  styleUrls: ['./party-view.component.css']
})
export class PartyViewComponent implements OnInit {

  _partyurl = "http://localhost:8080/api/party/";
  partyData: Party[];



  constructor(private httpClient: HttpClient) {
    this.httpClient.get(this._partyurl).subscribe((data: Party[]) => this.partyData = data);
  }

  ngOnInit(): void {
  }

}
