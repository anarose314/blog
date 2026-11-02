function walk(node, fn) {
	fn(node);
	if (node.children) for (const c of node.children) walk(c, fn);
}

export function rehypeImageGrid() {
	return (tree) => {
		walk(tree, (node) => {
			if (node.type !== "element" || node.tagName !== "grid") return;

			const props = node.properties || {};
			const cols = Math.min(
				Math.max(Number.parseInt(props.columns, 10) || 3, 1),
				12,
			);
			const aspectRaw = String(props.aspect ?? "");
			const aspect = /^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/.test(aspectRaw)
				? aspectRaw
				: "16/10";
			const fit = props.fit === "contain" ? "contain" : "cover";

			const imgs = [];
			for (const child of node.children || []) {
				if (child.type !== "element") continue;
				if (child.tagName === "img") imgs.push(child);
				else
					for (const c of child.children || [])
						if (c.type === "element" && c.tagName === "img") imgs.push(c);
			}

			node.tagName = "div";
			node.properties = {
				className: ["image-grid"],
				style: `--cols:${cols};--cols-md:${Math.min(cols, 2)};--aspect:${aspect};--fit:${fit}`,
			};
			node.children = imgs.map((img) => {
				const caption = img.properties?.title;
				return {
					type: "element",
					tagName: "figure",
					properties: { className: ["image-grid-item"] },
					children: [
						{
							type: "element",
							tagName: "div",
							properties: { className: ["image-grid-frame"] },
							children: [img],
						},
						...(caption
							? [
									{
										type: "element",
										tagName: "figcaption",
										properties: {},
										children: [{ type: "text", value: String(caption) }],
									},
								]
							: []),
					],
				};
			});
		});
	};
}
