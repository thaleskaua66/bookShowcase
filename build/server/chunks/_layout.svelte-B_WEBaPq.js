import { x as head, y as bind_props } from './index-BfXvQ71r.js';

function _layout($$payload, $$props) {
  let { children } = $$props;
  const prerender = true;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>The Metamorphosis - Franz Kafka</title>`;
    $$payload2.out.push(`<meta name="description" content="Download the book 'The Metamorphosis' by Franz Kafka."/>`);
  });
  children($$payload);
  $$payload.out.push(`<!---->`);
  bind_props($$props, { prerender });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-B_WEBaPq.js.map
