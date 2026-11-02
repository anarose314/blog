---
title: 블로그 템플릿 가이드
published: 2026-11-02
description: "블로그 템플릿 가이드"
image: "./image.png"
tags: []
category: Guides
draft: true
---

# 프론트매터

```yaml showLineNumbers=false
---
title: Blog Post
published: 2026-00-00
description: my blog post.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| Attribute | Description |
| :--- | :--- |
| `title` | 포스트의 제목 |
| `published` | 포스트가 발행된 날짜 |
| `description` | 포스트의 짧은 요약 설명 (메인 페이지에 표시) |
| `image` | 포스트의 커버 이미지 경로<br/>1. 웹 이미지: `http://` 또는 `https://`<br/>2. public 폴더: `/`<br/>3. 마크다운 파일 기준 상대 경로: 접두사 없음 |
| `tags` | 포스트의 태그 |
| `category` | 포스트의 카테고리 |
| `draft` | `true`로 설정하면 초안 상태가 되어 화면에 노출되지 않음 |

## 카테고리 리스트

| Category | Description |
| :--- | :--- |
| Front-end | JavaScript, 웹 전반 |
| TypeScript | 타입 시스템 및 문법 |
| React | React 생태계, 훅, 상태 관리, 쿼리 등 |
| Next.js | 앱 라우터, SSR/SSG, 서버 액션 등 |
| CSS / UI | 스타일링 및 UI/UX 컴포넌트 |
| Performance | 웹 성능 최적화, 렌더링 개선 |
| Troubleshooting | 에러 해결 기록 |
| Git / DevOps | 버전 관리, 배포 |
| Life | 일상 잡담, 회고 |

---

# 마크다운

_Italic_ | **bold** | `monospace`

```markdown showLineNumbers=false
_Italic_, **bold**, `monospace`
```

## 링크

[링크](https://example.com) | <a href="https://example.com" target="_blank" rel="noopener noreferrer">링크(새 창)</a> | [링크(해시태그)](#front-matter)

```markdown showLineNumbers=false
[링크](https://example.com)
<a href="https://example.com" target="_blank" rel="noopener noreferrer">링크(새 창)</a>
[링크(해시태그)](#front-matter)
```

## 주석

주석 [^1]
[^1]: 주석1 설명

```markdown showLineNumbers=false
주석 [^1]
[^1]: 주석1 설명
```

## 콜아웃

:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::caution
Negative potential consequences of an action.
:::

```markdown showLineNumbers=false
:::note
Highlights information that users should take into account, even when skimming.
:::

> [!NOTE]
> Highlights information that users should take into account, even when skimming.
```

### 커스텀 타이틀

:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```

## 스포일러

The content :spoiler[is hidden **ayyy**]

```markdown
The content :spoiler[is hidden **ayyy**]

```

## GitHub 레포지토리 카드

::github{repo="anarose314/sprint-team2-globalnomad"}

```markdown showLineNumbers=false
::github{repo="anarose314/sprint-team2-globalnomad"}
```

---

# 코드 스타일링

## 코드 하이라이팅

[Link](https://expressive-code.com/key-features/syntax-highlighting/)

```ansi
ANSI colors:
- Regular: [31mRed[0m [32mGreen[0m [33mYellow[0m [34mBlue[0m [35mMagenta[0m [36mCyan[0m
- Bold:    [1;31mRed[0m [1;32mGreen[0m [1;33mYellow[0m [1;34mBlue[0m [1;35mMagenta[0m [1;36mCyan[0m
- Dimmed:  [2;31mRed[0m [2;32mGreen[0m [2;33mYellow[0m [2;34mBlue[0m [2;35mMagenta[0m [2;36mCyan[0m

256 colors (showing colors 160-177):
[38;5;160m160 [38;5;161m161 [38;5;162m162 [38;5;163m163 [38;5;164m164 [38;5;165m165[0m
[38;5;166m166 [38;5;167m167 [38;5;168m168 [38;5;169m169 [38;5;170m170 [38;5;171m171[0m
[38;5;172m172 [38;5;173m173 [38;5;174m174 [38;5;175m175 [38;5;176m176 [38;5;177m177[0m

Full RGB colors:
[38;2;34;139;34mForestGreen - RGB(34, 139, 34)[0m

Text formatting: [1mBold[0m [2mDimmed[0m [3mItalic[0m [4mUnderline[0m
```

## 타이틀

[Link](https://expressive-code.com/key-features/frames/)

```js title="title="my-test-file.js""
console.log('Title attribute example')
```

```html
<!-- src/content/index.html -->
<div>File name comment example</div>
```

## 텍스트 & 라인 마커

[Link](https://expressive-code.com/key-features/text-markers/)

```js title="del={2} ins={3-4} {6}" del={2} ins={3-4} {6}
function demo() {
  console.log('this line is marked as deleted')
  // This line and the next one are marked as inserted
  console.log('this is the second inserted line')

  return 'this line uses the neutral default marker type'
}
```

```jsx title="{"1":4} del={"2":6-7} ins={"3":9-11}" {"1":4} del={"2":6-7} ins={"3":9-11}
<button
  role="button"
  {...props}
  value={value}
  className={buttonClassName}
  disabled={disabled}
  active={active}
>
  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

```jsx title="{"1. Provide the value prop here:":4-5} del={"2. Remove the disabled and active states:":7-9} ins={"3. Add this to render the children inside the button:":11-14}" {"1. Provide the value prop here:":4-5} del={"2. Remove the disabled and active states:":7-9} ins={"3. Add this to render the children inside the button:":11-14}
<button
  role="button"
  {...props}

  value={value}
  className={buttonClassName}

  disabled={disabled}
  active={active}
>

  {children &&
    !active &&
    (typeof children === 'string' ? <span>{children}</span> : children)}
</button>
```

```diff title="diff"
--- a/README.md
+++ b/README.md
@@ -1,3 +1,4 @@
+this is an actual diff file
-all contents will remain unmodified
 no whitespace will be removed either
```

```js title=""given text"" "given text"
function demo() {
  // Mark any given text inside lines
  return 'Multiple matches of the given text are supported';
}
```

```ts title="/ye[sp]/" /ye[sp]/
console.log('The words yes and yep will be marked.')
```

```sh title="/&#92;/ho.*&#92;//" /\/ho.*\//
echo "Test" > /home/test.txt
```

```js title="ins="inserted"" "return true;" ins="inserted" del="deleted"
function demo() {
  console.log('These are inserted and deleted marker types');
  // The return statement uses the default marker type
  return true;
}
```

## 자동 줄바꿈

[Word Wrap](https://expressive-code.com/key-features/word-wrap/)

```js wrap=false title="wrap=false"
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

```js wrap preserveIndent=false title="preserveIndent=false"
function getLongString() {
  return 'This is a very long string that will most probably not fit into the available space unless the container is extremely wide'
}
```

## 접이식 섹션

[Collapsible Sections](https://expressive-code.com/plugins/collapsible-sections/)

```js collapse={1-5, 12-14, 21-24} title="collapse={1-5, 12-14, 21-24}"
// All this boilerplate setup code will be collapsed
import { someBoilerplateEngine } from '@example/some-boilerplate'
import { evenMoreBoilerplate } from '@example/even-more-boilerplate'

const engine = someBoilerplateEngine(evenMoreBoilerplate())

// This part of the code will be visible by default
engine.doSomething(1, 2, 3, calcFn)

function calcFn() {
  // You can have multiple collapsed sections
  const a = 1
  const b = 2
  const c = a + b

  // This will remain visible
  console.log(`Calculation result: ${a} + ${b} = ${c}`)
  return c
}

// All this code until the end of the block will be collapsed again
engine.closeConnection()
engine.freeMemory()
engine.shutdown({ reason: 'End of example boilerplate code' })
```

## 행 번호

[Line Numbers](https://expressive-code.com/plugins/line-numbers/)

```js showLineNumbers=false title="showLineNumbers=false"
console.log('Hello?')
console.log('Sorry, do you know what line I am on?')
```

```js showLineNumbers startLineNumber=5 title="startLineNumber=5"
console.log('Greetings from line 5!')
console.log('I am on line 6')
```

---

# 그리드 이미지

:::grid{columns="3" aspect="16/9" fit="contain"}

![alt text](image.png "캡션")
![alt text](image.png "캡션2")
![alt text](image.png)

:::

> IMAGE SOURCE: matcha0904

```markdown showLineNumbers=false
:::grid{columns="3" aspect="16/9" fit="contain"}

![alt text](image.png "캡션")
![alt text](image.png "캡션2")
![alt text](image.png)

:::
```

| Attribute | Default | Options |
| --- | --- | --- |
| `columns` | `3` | `1` ~ `12` |
| `aspect` | `16/10` | `16/9`, `3/4`, `1/1` |
| `fit` | `cover` | `cover`, `contain` |

---

# 영상 (Youtube)

<iframe class="video-container" src="https://www.youtube.com/embed/KvLl0uikw_8?si=3lE_w3Tt2AiFJh9L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

```markdown showLineNumbers=false
<iframe class="video-container" src="https://www.youtube.com/embed/KvLl0uikw_8?si=3lE_w3Tt2AiFJh9L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```