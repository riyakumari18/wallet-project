import HelloWorld from "./HelloWorld";
import React from "react";
import {  render, screen } from "@testing-library/react";

it("should render HelloWorld",()=>
{
    render(
        <HelloWorld/>
    );
    expect(screen.getByText("Hello World!")).toBeTruthy();
})