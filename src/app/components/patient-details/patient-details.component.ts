import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntriesService } from 'src/app/services/entries.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
})
export class PatientDetailsComponent {
  constructor(
    private entryService: EntriesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private patientService: PatientService
  ) {}

  entries: any;
  currentPatientId: any;
  drugs: any[] = [];
  availableDrugs: any;
  newEntryDrugs: any[] = [];
  evolutions: any[] = [];
  recommDrugs: any[] = [];

  entry: any = {
    healthStatus: '',
    comments: '',
    diagnosis: '',
    drugsIds: [],
    createdDate: new Date(),
  };

  evol: any = {
    patientId: '',
    beginDate: '',
    diagnosis: '',
    endDate: '',
  };
  ngOnInit(): void {
    this.loadPage();
  }

  getEntries() {
    this.entryService.getEntriesByPatient(this.currentPatientId).subscribe({
      next: (response) => {
        //  console.log(response);
        this.entries = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getEvolutions() {
    this.patientService.getEvolutions(this.currentPatientId).subscribe({
      next: (response: any) => {
        //  console.log(response);
        this.evolutions = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getDrugs(drugsParam: any[]) {
    this.drugs = [];
    this.drugs = drugsParam;
  }
  getRecommDrugs(drugsParam: any[]) {
    this.recommDrugs = [];
    this.recommDrugs = drugsParam;
  }
  getAvalaibleDrugs() {
    this.patientService.getDrugs().subscribe({
      next: (response) => {
        // console.log(response);
        this.availableDrugs = response;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addOrRemoveDrugs(id: number) {
    const flag = this.newEntryDrugs.find((drug: any) => {
      return drug === id;
    });

    if (flag === undefined) {
      this.newEntryDrugs.push(id);
    } else {
      const newArr = this.newEntryDrugs.filter((drug: any) => {
        drug !== id;
      });

      this.newEntryDrugs = newArr;
    }
  }

  loadPage() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.patientService.getPatient(params['id']).subscribe(
        (res) => {
          console.log('Obtener el paciente para sacar sus entries');
          console.log(res);
          //this.patient = res;
        },
        (err) => console.log(err)
      );
    }
    this.currentPatientId = params['id'];
    this.getEntries();
    this.getAvalaibleDrugs();
    this.getEvolutions();
  }
  submitEntry() {
    this.entry.drugsIds = this.newEntryDrugs;
    this.entryService
      .createEntry(this.entry, this.currentPatientId)
      .subscribe(() => {
        this.loadPage();
        this.reloadEntry();
      });
  }
  submitEvolution() {
    this.evol.patientId = this.currentPatientId;
    this.patientService.createEvolution(this.evol).subscribe(() => {
      this.loadPage();
      this.reloadEvol();
    });
  }

  reloadEntry() {
    this.entry.healthStatus = '';
    this.entry.comments = '';
    this.entry.diagnosis = '';
    this.entry.drugsIds = [];
    this.entry.createdDate = new Date();
  }

  reloadEvol() {
    this.evol.beginDate = '';
    this.evol.diagnosis = '';
    this.evol.endDate = '';
  }
}
