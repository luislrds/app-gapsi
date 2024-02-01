import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { ICandidate } from '../../models/candidate.model';
const CANDIDATE_ID = '6dc3a3de-b63b-4210-a51e-6dfc01fada87'

@Component({
  standalone: true,
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.sass'],
  imports: [
    CommonModule,
  ],
  providers: [
    CandidateService
  ]
})
export class CandidateComponent implements OnInit {
  candidate: { name: string, image: string } | undefined = undefined;
  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.getCandidate(CANDIDATE_ID)
  }

  private async getCandidate(id: string): Promise<ICandidate> {
    const { data } = await this.candidateService.get(id).toPromise()
    this.candidate = data;
    return data;
  }
}
