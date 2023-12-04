import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  private apiUrl = 'http://127.0.0.1:5000';

  constructor(private fs: Firestore, private http: HttpClient) { }

  runScan(): Observable<any> {
    // Define the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhM2JkODk4ZGE1MGE4OWViOWUxY2YwYjdhN2VmZTM1OTNkNDEwNjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVhbHMtdWktZDEyZjkiLCJhdWQiOiJkZWFscy11aS1kMTJmOSIsImF1dGhfdGltZSI6MTcwMTY4OTc5MywidXNlcl9pZCI6InFiRkl1dTAydmdRWjlLMjRQRmFqTlpyUjVCSzIiLCJzdWIiOiJxYkZJdXUwMnZnUVo5SzI0UEZhak5aclI1QksyIiwiaWF0IjoxNzAxNjg5NzkzLCJleHAiOjE3MDE2OTMzOTMsImVtYWlsIjoieXV2YWx2aXplbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsieXV2YWx2aXplbEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.I2Fep-Qa3_m-nbKjHnPtvaKzl2IuBQgbMHneNP2ubNLHcodXk4sErfdAIW3wtNJUXw7hts5k4EZ4F0_KM8iM8ZCOsuBnyObZ3OXxemd64sIF88Y148z6aXun4Jw2_9xUobdoiFieYVF3OL9kRTtXB8MRp97c3Iz9neMR_BbyOvtzeJzjxlqlWuousLnEgOWoU6HpqgLQ8Y4rtPVRLE0isf8Bliq1aI8HapKvHloizIkvzGJTtb2BYz3n_eP3b-ASsmK-oaY931RTnswKBsga65NfKMxazNGGRRQiU7xnkiuYSPrmgBeX7C1VKDm-B5vX4qcx135apzUrUgyIXIEXjg'
    });

    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(this.apiUrl + '/run_scan', { headers });
  }


  submitDescription(): Observable<any> {
    // Define the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhM2JkODk4ZGE1MGE4OWViOWUxY2YwYjdhN2VmZTM1OTNkNDEwNjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVhbHMtdWktZDEyZjkiLCJhdWQiOiJkZWFscy11aS1kMTJmOSIsImF1dGhfdGltZSI6MTcwMTY4OTc5MywidXNlcl9pZCI6InFiRkl1dTAydmdRWjlLMjRQRmFqTlpyUjVCSzIiLCJzdWIiOiJxYkZJdXUwMnZnUVo5SzI0UEZhak5aclI1QksyIiwiaWF0IjoxNzAxNjg5NzkzLCJleHAiOjE3MDE2OTMzOTMsImVtYWlsIjoieXV2YWx2aXplbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsieXV2YWx2aXplbEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.I2Fep-Qa3_m-nbKjHnPtvaKzl2IuBQgbMHneNP2ubNLHcodXk4sErfdAIW3wtNJUXw7hts5k4EZ4F0_KM8iM8ZCOsuBnyObZ3OXxemd64sIF88Y148z6aXun4Jw2_9xUobdoiFieYVF3OL9kRTtXB8MRp97c3Iz9neMR_BbyOvtzeJzjxlqlWuousLnEgOWoU6HpqgLQ8Y4rtPVRLE0isf8Bliq1aI8HapKvHloizIkvzGJTtb2BYz3n_eP3b-ASsmK-oaY931RTnswKBsga65NfKMxazNGGRRQiU7xnkiuYSPrmgBeX7C1VKDm-B5vX4qcx135apzUrUgyIXIEXjg'
    });

    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post(this.apiUrl + '/submit-desc', { headers });
  }


  createMessage(): Observable<any> {
    // Define the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhM2JkODk4ZGE1MGE4OWViOWUxY2YwYjdhN2VmZTM1OTNkNDEwNjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVhbHMtdWktZDEyZjkiLCJhdWQiOiJkZWFscy11aS1kMTJmOSIsImF1dGhfdGltZSI6MTcwMTY4OTc5MywidXNlcl9pZCI6InFiRkl1dTAydmdRWjlLMjRQRmFqTlpyUjVCSzIiLCJzdWIiOiJxYkZJdXUwMnZnUVo5SzI0UEZhak5aclI1QksyIiwiaWF0IjoxNzAxNjg5NzkzLCJleHAiOjE3MDE2OTMzOTMsImVtYWlsIjoieXV2YWx2aXplbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsieXV2YWx2aXplbEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.I2Fep-Qa3_m-nbKjHnPtvaKzl2IuBQgbMHneNP2ubNLHcodXk4sErfdAIW3wtNJUXw7hts5k4EZ4F0_KM8iM8ZCOsuBnyObZ3OXxemd64sIF88Y148z6aXun4Jw2_9xUobdoiFieYVF3OL9kRTtXB8MRp97c3Iz9neMR_BbyOvtzeJzjxlqlWuousLnEgOWoU6HpqgLQ8Y4rtPVRLE0isf8Bliq1aI8HapKvHloizIkvzGJTtb2BYz3n_eP3b-ASsmK-oaY931RTnswKBsga65NfKMxazNGGRRQiU7xnkiuYSPrmgBeX7C1VKDm-B5vX4qcx135apzUrUgyIXIEXjg'
    });

    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post(this.apiUrl + '/create-msg', { headers });
  }


  refreshRate(): Observable<any> {
    // Define the headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjNhM2JkODk4ZGE1MGE4OWViOWUxY2YwYjdhN2VmZTM1OTNkNDEwNjgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZGVhbHMtdWktZDEyZjkiLCJhdWQiOiJkZWFscy11aS1kMTJmOSIsImF1dGhfdGltZSI6MTcwMTY4OTc5MywidXNlcl9pZCI6InFiRkl1dTAydmdRWjlLMjRQRmFqTlpyUjVCSzIiLCJzdWIiOiJxYkZJdXUwMnZnUVo5SzI0UEZhak5aclI1QksyIiwiaWF0IjoxNzAxNjg5NzkzLCJleHAiOjE3MDE2OTMzOTMsImVtYWlsIjoieXV2YWx2aXplbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsieXV2YWx2aXplbEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.I2Fep-Qa3_m-nbKjHnPtvaKzl2IuBQgbMHneNP2ubNLHcodXk4sErfdAIW3wtNJUXw7hts5k4EZ4F0_KM8iM8ZCOsuBnyObZ3OXxemd64sIF88Y148z6aXun4Jw2_9xUobdoiFieYVF3OL9kRTtXB8MRp97c3Iz9neMR_BbyOvtzeJzjxlqlWuousLnEgOWoU6HpqgLQ8Y4rtPVRLE0isf8Bliq1aI8HapKvHloizIkvzGJTtb2BYz3n_eP3b-ASsmK-oaY931RTnswKBsga65NfKMxazNGGRRQiU7xnkiuYSPrmgBeX7C1VKDm-B5vX4qcx135apzUrUgyIXIEXjg'
    });

    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post(this.apiUrl + '/refresh-rate', { headers });
  }

  getProducts() {
    let productsCollection = collection(this.fs, 'products');
    return collectionData(productsCollection, {idField: 'id'});
  }

  addProduct(productName: string, productDescription: string, productImage: string, productPrice: string) {
    let data = {
      name: productName,
      description: productDescription,
      imageUrl: productImage,
      price: productPrice
    };
    let productsCollection = collection(this.fs, 'products');
    return addDoc(productsCollection, data);
  }

  deleteProduct(id: string) {
    let docRef = doc(this.fs, 'products/'+id);
    return deleteDoc(docRef);
  }
}
