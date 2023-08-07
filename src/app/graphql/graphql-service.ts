import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageModal } from '../modals/imageModal';
import { GET_IMAGES, GET_USERS } from './queries/queries';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  constructor(private apollo: Apollo) {}

  getImages(): Observable<ImageModal[]> {
    return this.apollo.query<any>({
      query: GET_IMAGES
    }).pipe(
      map(result => {
        if (result.data && result.data.imagesConnection && result.data.imagesConnection.edges) {
          const imageEdges = result.data.imagesConnection.edges;
          const images = imageEdges.map((edge: any) => edge.node.pictureID.url) as ImageModal[];
          return images;
        }
        return [];
      })
    );
  }

  getUsers(): Observable<any[]> {
    return this.apollo.query<any>({
      query: GET_USERS
    }).pipe(
      map(result => {
        if (result.data && result.data.getUsers) {
          return result.data.getUsers;
        }
        return [];
      })
    );
  }
}
