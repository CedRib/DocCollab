import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentEditor } from '@syncfusion/ej2-angular-documenteditor';

@Component({
  selector: 'app-revision-dialog',
  template: `
    <h1 mat-dialog-title>Révisions</h1>
    <div mat-dialog-content>
      <p>Voici les modifications proposées : </p>
      <ul>
        <li *ngFor="let revision of revisions">{{ revision }}</li>
      </ul>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="acceptChanges()">Accepter toutes les modifications</button>
      <button mat-button (click)="rejectChanges()">Rejeter toutes les modifications</button>
      <button mat-button (click)="closeDialog()">Fermer</button>
    </div>
  `,
  standalone: true
})
export class RevisionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RevisionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public revisions: any,
    private documentEditor: DocumentEditor
  ) {}

  acceptChanges(): void {
    (this.documentEditor.revisions as unknown as any[]).forEach((revision: any) => {
      (this.documentEditor.revisions as any).accept(revision);
    });
    this.dialogRef.close();
  }

  rejectChanges(): void {
    (this.documentEditor.revisions as unknown as any[]).forEach((revision: any) => {
      (this.documentEditor.revisions as any).reject(revision);
    });
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
