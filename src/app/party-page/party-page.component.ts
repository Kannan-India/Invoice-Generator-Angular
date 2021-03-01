import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Party } from '../model/partyModel';

@Component({
  selector: 'app-party-page',
  templateUrl: './party-page.component.html',
  styleUrls: ['./party-page.component.css']
})
export class PartyPageComponent implements OnInit {

  partyValue = new Party;
  partyPostUrl = 'http://localhost:8080/api/party/';

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }


  addPartyForm = this.fb.group({
    partyName: [''],
    partyType: [''],
    phoneNumber: [],
    city: [''],
    state: [''],
    postalCode: [''],
  });

  onSubmit(form) {
    this.partyValue.id = null;
    this.partyValue.partyName = form.value.partyName;
    this.partyValue.partyType = form.value.partyType;
    this.partyValue.phoneNumber = form.value.phoneNumber;
    this.partyValue.city = form.value.city;
    this.partyValue.state = form.value.state;
    this.partyValue.postalCode = form.value.postal;
    console.log(form.value);

    this.httpClient.post(this.partyPostUrl, this.partyValue).subscribe(
      response => console.log('Success!', response),
      error => console.log('Error', error)
    );
  }


  ngOnInit(): void {
  }



}
