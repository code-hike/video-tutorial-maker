import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import config from "./app";

@NgModule({
  imports: [BrowserModule],
  providers: [],
  ...config,
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.log(err));
