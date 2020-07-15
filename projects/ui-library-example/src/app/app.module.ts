import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CodeExampleBlockComponent } from "./code-example-block/code-example-block.component";
import { ButtonComponent } from "./pages/button/button.component";
import { IntroductionComponent } from "./pages/introduction/introduction.component";
import { HeaderComponent } from "./header/header.component";
import { ColorsComponent } from "./pages/colors/colors.component";
import { AccordionComponent } from "./pages/accordion/accordion.component";
import {
  ButtonModule
} from "projects/ui-library/src/public-api";

@NgModule({
  declarations: [
    AppComponent,
    CodeExampleBlockComponent,
    ButtonComponent,
    IntroductionComponent,
    HeaderComponent,
    ColorsComponent,
    AccordionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
