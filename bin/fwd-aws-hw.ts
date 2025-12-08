#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { FrontEndStack } from "../lib/fwd-aws-hw-stack";

const app = new cdk.App();
new FrontEndStack(app, "FrontEndStack", {
  env: {
    region: "eu-central-1",
  },
});
