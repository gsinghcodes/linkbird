"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { CircleAlert, Timer } from "lucide-react";
import { Select, SelectTrigger } from "../ui/select";

export default function CampaignSequence() {
  return (
    <div className="p-4">
      <Card className="space-y-4">
        {/* Main Card Header */}
        <CardHeader>
          <CardTitle className="text-lg font-bold">Message Sequence</CardTitle>
          <CardDescription>
            Edit your campaign messages and templates below.
          </CardDescription>
        </CardHeader>

        <CardContent>
          {/* Request Message Card */}
          <Card className="relative shadow-md">
            <CardHeader>
              <CardTitle className="text-md font-semibold">Request Message</CardTitle>
              <CardDescription>Edit your request message here.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex gap-6">
                {/* Available Fields Section */}
                <div className="flex-1">
                  <h2 className="font-semibold mb-2">Available fields:</h2>
                  <Textarea
                    value="{{fullName}} - Full Name"
                    readOnly
                    className="bg-gray-100 text-gray-700 cursor-not-allowed"
                  />
                </div>

                {/* Message Template Section */}
                <div className="flex-1">
                  <h2 className="font-semibold mb-2">Message Template</h2>
                  <p className="text-sm text-gray-600 mb-1">
                    Design your message template using the available fields
                  </p>
                  <div className="bg-gray-100 mb-2 rounded-md flex items-center gap-2 p-3">
                    <CircleAlert size={14} />
                    <p className="text-xs">
                      Use <code className="text-blue-400">{'{{field_name}}'}</code> to insert mapped fields.
                    </p>
                  </div>
                  <Textarea
                    value="Hi {{firstName}}, thanks for connecting!"
                    readOnly
                    rows={4}
                    className="bg-gray-100 text-gray-700 cursor-not-allowed"
                  />
                </div>
              </div>
            </CardContent>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button className="shadow-md" variant={"outline"} size="sm">Preview</Button>
              <Button className="shadow-md" size="sm">Save</Button>
            </div>
          </Card>

          {/* Connection Message Card */}
          <Card className="mt-4 relative shadow-md">
            <CardHeader>
              <CardTitle className="text-md font-semibold">Connection Message</CardTitle>
              <CardDescription>Edit your connection message here.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex gap-6">
                <Textarea
                  value="Hello {{firstName}}, glad to connect!"
                  readOnly
                  rows={4}
                  className="bg-gray-100 text-gray-700 cursor-not-allowed"
                />
              </div>
            </CardContent>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button className="shadow-md" variant={"outline"} size="sm">Preview</Button>
              <Button className="shadow-md" size="sm">Save</Button>
            </div>
          </Card>

          {/* First Follow-up Message Card */}
          <Card className="mt-4 relative shadow-md">
            <CardHeader>
              <CardTitle className="text-md font-semibold">First Follow-up Message</CardTitle>
              <CardDescription>Edit your first follow-up message here.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex gap-6">
                <Textarea
                  value="Hi {{firstName}}, just checking in!"
                  readOnly
                  rows={4}
                  className="bg-gray-100 text-gray-700 cursor-not-allowed"
                />
              </div>
              <div className="flex bg-gray-100 text-sm gap-2 py-1 rounded-md px-2 items-center">
                <Timer size={14} />
                <h1>Send</h1>
                <Select>
                  <SelectTrigger className="h-6 px-2 py-1 text-sm">
                    1 day
                  </SelectTrigger>
                </Select>
                <h1>after welcome message</h1>
              </div>
            </CardContent>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button className="shadow-md" variant={"outline"} size="sm">Preview</Button>
              <Button className="shadow-md" size="sm">Save</Button>
            </div>
          </Card>

          {/* Second Follow-up Message Card */}
          <Card className="mt-4 relative shadow-md">
            <CardHeader>
              <CardTitle className="text-md font-semibold">Second Follow-up Message</CardTitle>
              <CardDescription>Edit your second follow-up message here.</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex gap-6">
                <Textarea
                  value="Hi {{firstName}}, wanted to follow up!"
                  readOnly
                  rows={4}
                  className="bg-gray-100 text-gray-700 cursor-not-allowed"
                />
              </div>
              <div className="flex bg-gray-100 text-sm gap-2 py-1 rounded-md px-2 items-center">
                <Timer size={14} />
                <h1>Send</h1>
                <Select>
                  <SelectTrigger className="h-6 px-2 py-1 text-sm">
                    2 days
                  </SelectTrigger>
                </Select>
                <h1>after first follow-up message</h1>
              </div>
            </CardContent>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <Button className="shadow-md" variant={"outline"} size="sm">Preview</Button>
              <Button className="shadow-md" size="sm">Save</Button>
            </div>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
