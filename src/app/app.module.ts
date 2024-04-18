import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [/* other components */],
  imports: [
    HttpClientModule,
    // other imports...
  ],
  bootstrap: [/* Your root component */],
})
export class AppModule {}
