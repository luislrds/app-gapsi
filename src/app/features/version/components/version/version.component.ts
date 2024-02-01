import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  standalone: true,
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.sass'],
  imports: [
    CommonModule,
  ],
  providers: [
    VersionService
  ]
})
export class VersionComponent implements OnInit {
  public version: string = ''
  constructor(private versionService: VersionService) { }

  ngOnInit(): void {
    this.getApplicationData()
  }

  async getApplicationData(): Promise<void> {
    const { data } = await this.versionService.get().toPromise()
    this.version = data?.version
  }

}
