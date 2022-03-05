# MagicPod javascript action

Run batch test

## Inputs

## `API_TOKEN`

**Required** API Token.

## `ORGANIZATION`

**Required** Organization name.

## `PROJECT`

**Required** Project name.

## `TEST_SETTINGS_NUMBER`

**Required** Test settings number defined in the project batch run page. Default `"0"`.

## Example usage

```yml
uses: knaot0/magic-pod-action@v1.1
with:
  API_TOKEN: ${{ secrets.MAGIC_POD_API_TOKEN }}
  ORGANIZATION: "Organization name"
  PROJECT: "Project name"
  TEST_SETTINGS_NUMBER: "1"
```
