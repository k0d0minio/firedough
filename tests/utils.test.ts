import { describe, expect, it } from "vitest";
import { cn } from "../lib/utils";

describe("cn", () => {
  it("joins the class names and drops the false values", () => {
    expect(cn("px-2", false && "hidden", "text-sm")).toBe("px-2 text-sm");
  });

  it("keeps the last Tailwind class when two classes conflict", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});
