---
layout: default
title: mesheryctl-exp-relationship-generate
permalink: reference/mesheryctl/exp/relationship/generate
redirect_from: reference/mesheryctl/exp/relationship/generate/
type: reference
display-title: "false"
language: en
command: exp
subcommand: relationship
---

# mesheryctl exp relationship generate

Generate relationships documents

## Synopsis

Generate relationships documents from the google spreadsheets
<pre class='codeblock-pre'>
<div class='codeblock'>
mesheryctl exp relationship generate [flags]

</div>
</pre> 

## Examples

Generate relationships documentss
<pre class='codeblock-pre'>
<div class='codeblock'>
mesheryctl exp relationship generate --spreadsheet-id [Spreadsheet ID] --spreadsheet-cred $CRED

</div>
</pre> 

## Options

<pre class='codeblock-pre'>
<div class='codeblock'>
  -h, --help                      help for generate
      --spreadsheet-cred string   base64 encoded credential to download the spreadsheet
      --spreadsheet-id string     spreadsheet ID for the integration spreadsheet

</div>
</pre>

## Options inherited from parent commands

<pre class='codeblock-pre'>
<div class='codeblock'>
      --config string   path to config file (default "/home/runner/.meshery/config.yaml")
  -v, --verbose         verbose output

</div>
</pre>

## See Also

Go back to [command reference index](/reference/mesheryctl/), if you want to add content manually to the CLI documentation, please refer to the [instruction](/project/contributing/contributing-cli#preserving-manually-added-documentation) for guidance.
