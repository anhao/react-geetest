import type { GeeTestProps } from './GeeTest';
import GeeTest from './GeeTest';
import type { GeeTestValidateParams } from './Server';
import { generateSignToken, validateCaptcha } from './Server';
import type { GeeTestEventCallbacks, GeeTestRef, GeeTestValidateResult } from './interface';
import { useGeeTest } from './hooks/useGeeTest';

export { validateCaptcha, generateSignToken, useGeeTest };
export type {
  GeeTestProps,
  GeeTestValidateParams,
  GeeTestValidateResult,
  GeeTestRef,
  GeeTestEventCallbacks,
};

export default GeeTest;
