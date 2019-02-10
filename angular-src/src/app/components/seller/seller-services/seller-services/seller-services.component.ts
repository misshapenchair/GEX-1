// By Roni
// View & Add offered seller goods/services
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../../../../services/seller.service';
import { NotifierService } from 'angular-notifier';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-seller-services',
  templateUrl: './seller-services.component.html',
  styleUrls: ['./seller-services.component.css']
})
export class SellerServicesComponent implements OnInit {
  private readonly notifier: NotifierService;

  // Temp codes for MVP - Kurgan
	codes = [
    { code: 78965422, name: 'Jewelry'},
    { code: 78965423, name: 'Necklaces (Jewelry)'},
    { code: 78965424, name: 'Rings (Jewelry)'},
    { code: 78965425, name: 'Earrings (Jewelry)'},
    { code: 68977451, name: 'Dolls'},
    { code: 67887941, name: 'Sculptures'},
    { code: 62145331, name: 'Scarves'},
    { code: 54887921, name: 'Blankets'},
    { code: 52871151, name: 'Socks'},
    { code: 50360051, name: 'Pencils'},
    { code: 49605401, name: 'Painting'},
    { code: 49605402, name: 'Oil (Painting)'},
    { code: 49605403, name: 'Watercolor (Painting)'},
    { code: 49605404, name: 'Acrlyic (Painting)'}
  ];
  code: Number;
  codeList: [Number];
  None: Boolean;
  codeNames: any[];

  // Used for the dropdown
/* 	public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
		this.code = newVal;
	} */

  constructor(private sellerService: SellerService,
    private notifierService: NotifierService,
    private router: Router) { this.notifier = notifierService; }

  // View seller current codes - Roni
  ngOnInit() {
    var LocalArray = new Array();
    this.None = false;
    // Get seller codes
    this.sellerService.getCode().subscribe((data: any) => {
      if (data.success) {
        if (data.codeList.length === 0) { // Seller does not have any codes yet
          this.None = true;
        } else {
          this.codeList = data.codeList;
          this.None = false;
          var i, j = 0;
          // Retrieve all seller current codes
          // FOR MVP ONLY, will find a better and suffiecent way to perform this
          for (i = 0; i < this.codeList.length; i++) {

            for (j = 0; j < this.codes.length; j++) {
              if (this.codes[j].code === this.codeList[i]) {
                LocalArray.push(this.codes[j].name);
            }
            }
          }
          this.codeNames = LocalArray;
        }
      }
    });
  }

  // Checking which checkboxes are checked and upload the code - By: Andre Wijaya
  AddCode() {
    // Jewelry
    var element = <HTMLInputElement> document.getElementById('78965422');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Necklaces (Jewelry)
    var element = <HTMLInputElement> document.getElementById('78965423');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Rings (Jewelry)
    var element = <HTMLInputElement> document.getElementById('789654224');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Earrings (Jewelry)
    var element = <HTMLInputElement> document.getElementById('78965425');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Dolls
    var element = <HTMLInputElement> document.getElementById('68977451');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Sculptures
    var element = <HTMLInputElement> document.getElementById('67887941');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Scarves
    var element = <HTMLInputElement> document.getElementById('62145331');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Blankets
    var element = <HTMLInputElement> document.getElementById('54887921');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Socks
    var element = <HTMLInputElement> document.getElementById('52871151');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Pencils
    var element = <HTMLInputElement> document.getElementById('50360051');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Painting
    var element = <HTMLInputElement> document.getElementById('49605401');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Oil (Painting)
    var element = <HTMLInputElement> document.getElementById('49605402');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Watercolor (Painting)
    var element = <HTMLInputElement> document.getElementById('49605403');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }

    // Acrlyic (Painting)
    var element = <HTMLInputElement> document.getElementById('49605404');
    if (element.checked === true) {
      this.code = Number(element.value);
      this.uploadCode();
    }
  }

  // Upload new code to seller - Roni
  uploadCode() {
    const code = {
      codes: this.code
    };

    this.sellerService.setNewCode(code).subscribe((data: any) => {
      if (data.success) {
        this.notifier.notify('success', 'Your New Code was submitted!');
        this.router.navigate(['/seller/seller-services']);
      } else {
        this.notifier.notify('error', data.msg);
        this.router.navigate(['/seller/seller-services']);
      }
    });
  }
}
