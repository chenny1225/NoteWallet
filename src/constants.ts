export const NOTE_PROTOCOL_ENVELOPE_ID = "NOTE";

export const MAX_SCRIPT_ELEMENT_SIZE = 520-4;
export const MAX_STANDARD_STACK_ITEM_SIZE = 80-2;
export const MAX_DATA_SEGMENTS = 5;

export const MAX_SCRIPT_FULL_SIZE = MAX_SCRIPT_ELEMENT_SIZE * 5;
export const MAX_STACK_FULL_SIZE =
  MAX_STANDARD_STACK_ITEM_SIZE * MAX_DATA_SEGMENTS;

export const MAX_SEQUENCE = 0xffffffff;
export const MAX_LOCKTIME = 0xffffffff;
