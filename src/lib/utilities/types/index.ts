import type { HTMLElements } from "./HTMLElements"

export type HTMLProps<T extends keyof HTMLElements> = HTMLElements[T]
