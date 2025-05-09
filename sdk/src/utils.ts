import { PublicKey } from '@solana/web3.js';
import * as anchor from '@project-serum/anchor';

/**
 * Finds a program-derived address (PDA)
 * 
 * @param programId The program ID to derive the PDA for
 * @param seeds The seeds to use for derivation
 * @returns The PDA and bump seed
 */
export function findProgramAddress(
  programId: PublicKey,
  seeds: (Buffer | Uint8Array)[]
): Promise<[PublicKey, number]> {
  return anchor.web3.PublicKey.findProgramAddress(seeds, programId);
}

/**
 * Helper to convert a string to a buffer for PDA seeds
 * 
 * @param value The string value
 * @returns A buffer containing the string
 */
export function stringToBuffer(value: string): Buffer {
  return Buffer.from(value, 'utf-8');
} 