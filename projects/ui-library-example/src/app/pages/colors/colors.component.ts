import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-colors",
  templateUrl: "./colors.component.html",
  styleUrls: ["./colors.component.scss"]
})
export class ColorsComponent implements OnInit {
  colors = [
    {
      colorType: "Genaral Colors",
      values: [
        { label: "$white:", value: "#ffffff" },
        { label: "$black:", value: "#000000" },
        { label: "$negative:", value: "#f34336" },
        { label: "$negative-dark:", value: "#ce2b1f" },
        { label: "$warning:", value: "#fcbb09" },
        { label: "$warning-dark:", value: "#e6ab07" },
        { label: "$risk:", value: "#ff8b3a" },
        { label: "$risk-dark:", value: "#e4782d" },
        { label: "$positive", value: "#7fae1b" },
        { label: "$positive-dark:", value: "#6f9a13 " }
      ]
    },
    {
      colorType: "Primary colors",
      values: [
        { label: "$primary", value: "#121F26" },
        { label: "$primary-600", value: "#23343F" },
        { label: "$primary-500", value: "#2C404c" },
        { label: "$primary-400", value: "#364c59" },
        { label: "$primary-300", value: "#677e8c" },
        { label: "$primary-200", value: "#889aa5" },
        { label: "$primary-100", value: "#a3b5bf" }
      ]
    },
    {
      colorType: "Secondary colors",
      values: [
        { label: "$secondary-400", value: "#007acc" },
        { label: "$secondary-300", value: "#065769" },
        { label: "$secondary-200", value: "#09819c" },
        { label: "$secondary-100", value: "#056769" }
      ]
    },
    {
      colorType: "light colors",
      values: [
        { label: "$light", value: "#d8e0e5" },
        { label: "$light-300", value: "#e2e8ed" },
        { label: "$light-200", value: "#ebeff2" },
        { label: "$light-100", value: "#ffffff" }
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
