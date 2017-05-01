$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src\\test\\resources\\HostelWorld.feature");
formatter.feature({
  "line": 2,
  "name": "HomePage hostelworld",
  "description": "",
  "id": "homepage-hostelworld",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Web"
    },
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenario({
  "line": 13,
  "name": "Validate the searches in hostelword site",
  "description": "",
  "id": "homepage-hostelworld;validate-the-searches-in-hostelword-site;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 1,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@UseCase1"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "access to link \"http://www.hostelworld.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hostelworld.com",
      "offset": 16
    }
  ],
  "location": "HomePage.OpenBrowser(String)"
});
formatter.result({
  "duration": 13241936206,
  "status": "passed"
});
formatter.step({
  "line": 6,
  "name": "resolution is \"0\" \"0\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 15
    },
    {
      "val": "0",
      "offset": 19
    }
  ],
  "location": "HomePage.resolutionPage(Integer,Integer)"
});
formatter.result({
  "duration": 1262651099,
  "status": "passed"
});
formatter.step({
  "line": 7,
  "name": "insert word to find \"Dublin, Ireland\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 21
    }
  ],
  "location": "HomePage.InsertWord(String)"
});
formatter.result({
  "duration": 8716865664,
  "status": "passed"
});
formatter.step({
  "line": 8,
  "name": "click menu SotByName",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.ClickSort()"
});
formatter.result({
  "duration": 1847887714,
  "status": "passed"
});
formatter.step({
  "line": 9,
  "name": "validate the asort name result",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.AssertValues()"
});
formatter.result({
  "duration": 280515009,
  "status": "passed"
});
formatter.step({
  "line": 10,
  "name": "Close and Quit",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.CloseBrowser()"
});
formatter.result({
  "duration": 1590692996,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Validate the searches in hostelword site",
  "description": "",
  "id": "homepage-hostelworld;validate-the-searches-in-hostelword-site;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 1,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@UseCase1"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "access to link \"http://www.hostelworld.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hostelworld.com",
      "offset": 16
    }
  ],
  "location": "HomePage.OpenBrowser(String)"
});
formatter.result({
  "duration": 11234672760,
  "status": "passed"
});
formatter.step({
  "line": 6,
  "name": "resolution is \"412\" \"732\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "412",
      "offset": 15
    },
    {
      "val": "732",
      "offset": 21
    }
  ],
  "location": "HomePage.resolutionPage(Integer,Integer)"
});
formatter.result({
  "duration": 1270513477,
  "status": "passed"
});
formatter.step({
  "line": 7,
  "name": "insert word to find \"Dublin, Ireland\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 21
    }
  ],
  "location": "HomePage.InsertWord(String)"
});
formatter.result({
  "duration": 7807765025,
  "status": "passed"
});
formatter.step({
  "line": 8,
  "name": "click menu SotByName",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.ClickSort()"
});
formatter.result({
  "duration": 1596696262,
  "status": "passed"
});
formatter.step({
  "line": 9,
  "name": "validate the asort name result",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.AssertValues()"
});
formatter.result({
  "duration": 186640774,
  "status": "passed"
});
formatter.step({
  "line": 10,
  "name": "Close and Quit",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.CloseBrowser()"
});
formatter.result({
  "duration": 1128691561,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate the searches in hostelword site",
  "description": "",
  "id": "homepage-hostelworld;validate-the-searches-in-hostelword-site;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    },
    {
      "line": 1,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@UseCase1"
    },
    {
      "line": 1,
      "name": "@Web"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "access to link \"http://www.hostelworld.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.hostelworld.com",
      "offset": 16
    }
  ],
  "location": "HomePage.OpenBrowser(String)"
});
formatter.result({
  "duration": 21656397557,
  "status": "passed"
});
formatter.step({
  "line": 6,
  "name": "resolution is \"768\" \"1024\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "768",
      "offset": 15
    },
    {
      "val": "1024",
      "offset": 21
    }
  ],
  "location": "HomePage.resolutionPage(Integer,Integer)"
});
formatter.result({
  "duration": 1243656032,
  "status": "passed"
});
formatter.step({
  "line": 7,
  "name": "insert word to find \"Dublin, Ireland\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Dublin, Ireland",
      "offset": 21
    }
  ],
  "location": "HomePage.InsertWord(String)"
});
formatter.result({
  "duration": 6568239215,
  "status": "passed"
});
formatter.step({
  "line": 8,
  "name": "click menu SotByName",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.ClickSort()"
});
formatter.result({
  "duration": 3126425583,
  "status": "passed"
});
formatter.step({
  "line": 9,
  "name": "validate the asort name result",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.AssertValues()"
});
formatter.result({
  "duration": 243444902,
  "status": "passed"
});
formatter.step({
  "line": 10,
  "name": "Close and Quit",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.CloseBrowser()"
});
formatter.result({
  "duration": 1178908885,
  "status": "passed"
});
});