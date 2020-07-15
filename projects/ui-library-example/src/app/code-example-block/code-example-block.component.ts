import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-code-example-block",
  templateUrl: "./code-example-block.component.html",
  styleUrls: ["./code-example-block.component.scss"]
})
export class CodeExampleBlockComponent implements OnInit {
  @Input()
  ElementName: string;
  constructor() {}

  ngOnInit() {}
}
