import { Component } from '@angular/core';

const arrTest = [
  {
    code: 'build_teh',
    content: null,
    codeIndex: 1,
    codePosition: 'image',
    fileUrl: 'https://kmb.svitsoft.com/wp-content/kmbapp-pic/site-resource/21/239_Preview.jpg'
  },
  {
    code: 'build_teh',
    content: 'Title',
    codeIndex: 1,
    codePosition: 'Title',
    fileUrl: null
  },
  {
    code: 'build_teh',
    content: 'Title 2',
    codeIndex: 1,
    codePosition: 'content',
    fileUrl: null
  },
  {
    code: 'build_teh',
    content: null,
    codeIndex: 2,
    codePosition: 'image',
    fileUrl: 'https://kmb.svitsoft.com/wp-content/kmbapp-pic/site-resource/21/242_Sample2.jpg'
  },
  {
    code: 'build_teh',
    content: 'aaaaaaaaaaaa',
    codeIndex: 2,
    codePosition: 'Title',
    fileUrl: null
  },
  {
    code: 'build_teh',
    content: 'vvvvvvvvvvv',
    codeIndex: 2,
    codePosition: 'content',
    fileUrl: null
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iptest';
  testGroup() {
    //  const res = this.groupBy(arrTest, 'code');
    //  console.log(res);
    //  const res2 = this.groupBy(res.get('build_teh'), 'codeIndex');
    //  console.log(res2);
    const res = this.doubleGroupBy(arrTest, 'code');
    console.log(res);
  }

  groupBy(arrForGroup: any[], fieldName: string): Map<string, any[]> {
    const mapGroup = new Map();

    for (const res of arrForGroup) {
      let arr = mapGroup.get(res[fieldName]);
      if (!arr) {
        mapGroup.set(res[fieldName], []);
        arr = mapGroup.get(res[fieldName]);
      }
      arr.push(res);
    }
    return mapGroup;
  }
  doubleGroupBy(arrForGroup: any[], fieldName: string): Array<any[]> {
    const firstGroup = this.groupBy(arrForGroup, fieldName);
    // console.log(firstGroup);
    const transformed = this.groupBy(firstGroup.get('build_teh'), 'codeIndex');
    const result = [];
    for(const key of transformed.keys()) {
       result.push(transformed.get(key));
    }
    return result;
  }

}
