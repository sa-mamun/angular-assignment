import { Component, OnInit } from "@angular/core";
import { initFlowbite } from "flowbite";

@Component({
    selector: "app-user-profile",
    templateUrl: "./user-profile.component.html",
    styleUrls: ["./user-profile.component.css"]
})

export class UserProfileComponent implements OnInit {
    title: string = "User Profile";
    ngOnInit(): void {
        initFlowbite();
    }
}