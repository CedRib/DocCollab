import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection!: signalR.HubConnection;

  public startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5000/documenthub') 
      .build();

    this.hubConnection.start().then(() => console.log('Connection started'));
  }

  public listenToChanges(callback: (data: any) => void): void {
    this.hubConnection.on('ReceiveDocumentChanges', callback);
  }

  public sendChanges(content: any): void {
    this.hubConnection.invoke('SendDocumentChanges', content);
  }
}
