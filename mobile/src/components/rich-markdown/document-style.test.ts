import { expect, it } from 'vitest'
import { richMarkdownEditorStyle } from './document-style'

it('keeps wide tables scrollable with readable wrapping cells', () => {
  const css = richMarkdownEditorStyle()
  const table = css.match(/    table \{([^}]+)\}/)?.[1]
  const cells = css.match(/    th, td \{([^}]+)\}/)?.[1]
  for (const rule of ['display: block', 'overflow-x: auto', 'overscroll-behavior-x: contain']) {
    expect(table).toContain(rule)
  }
  for (const rule of [
    'min-width: 10em',
    'max-width: 22em',
    'overflow-wrap: break-word',
    'word-break: keep-all'
  ]) {
    expect(cells).toContain(rule)
  }
})
