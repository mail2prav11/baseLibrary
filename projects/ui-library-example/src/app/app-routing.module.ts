import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ButtonComponent } from "./pages/button/button.component";
import { IntroductionComponent } from "./pages/introduction/introduction.component";
import { ColorsComponent } from "./pages/colors/colors.component";
import { AccordionComponent } from "./pages/accordion/accordion.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/buttons",
    pathMatch: "full"
  },
  {
    path: "introduction",
    component: IntroductionComponent
  },
  {
    path: "colors",
    component: ColorsComponent
  },
  {
    path: "buttons",
    component: ButtonComponent
  },
  {
    path: "accordion",
    component: AccordionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
