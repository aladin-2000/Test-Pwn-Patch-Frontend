import { Component, OnInit } from '@angular/core';
import { ShodanResponseModel } from 'src/app/Models/ShodanResponseModel';
import { ShodanService } from '../services/shodan-service.service';

@Component({
  selector: 'app-normal-user',
  templateUrl: './normal-user.component.html',
  styleUrls: ['./normal-user.component.css']
})
export class NormalUserComponent implements OnInit {

  shodanData: ShodanResponseModel = {
    ip_str: '',
    isp: '',
    os: '',
    ports: [],
    country_name: '',
    city: '',
    latitude: 0,
    longitude: 0,
    hostnames: [],
    organization: '',
    region_code: '',
    area_code: '',
    postal_code: ''
  };

  constructor(private shodanService: ShodanService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.shodanService.getIpDetails(this.shodanData.ip_str)
    .subscribe(
      response => {
        this.shodanData = response;
      }
    );
  }
}
