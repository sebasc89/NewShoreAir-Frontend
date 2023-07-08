import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JourneyRequest } from 'src/app/models/journey-request.model';
import { JourneyService } from 'src/app/services/journey.service.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent  {
  origin: string;
  destination: string;
  error : string;
  isSearching: boolean = false;
  journeyForm: FormGroup;
  journey: any = {};
  journeyResponse: any = {};
  
  constructor(private fb: FormBuilder, private journeyService: JourneyService) {
    this.origin = ''; 
    this.destination = '';
    this.error = '';

    this.journeyForm = this.fb.group({
      origin: ['', [Validators.required, Validators.maxLength(3)]],
      destination: ['', [Validators.required, Validators.maxLength(3)]]
    });
  }

  onSearch() {

    const origin = this.journeyForm.get('origin')?.value;
    const destination = this.journeyForm.get('destination')?.value;

    if (origin === destination) {
      this.journeyForm.setErrors({ sameValue: true });
      return;
    }

    const journeyRequest: JourneyRequest = {
      origin: this.journeyForm.value.origin,
      destination: this.journeyForm.value.destination
    };

    this.isSearching = true;

    // Llama al método getJourney del servicio
    this.journeyService.getJourney(journeyRequest)
      .subscribe(
        journeyData => {
          // Maneja la respuesta del servicio aquí
          this.journeyResponse = journeyData;
          console.log(journeyData);
          this.isSearching = false;
        },
        error => {
          // Maneja el error aquí
          this.error = error.message;
          this.isSearching = false;
        }
      );
  }
  

  onKeyUp(event: any, field: string) {
    this.journey[field] = event.target.value.toUpperCase();
  }

}
