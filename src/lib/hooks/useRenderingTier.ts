"use client"

import { useState, useEffect } from 'react';
import { determineRenderingTier } from '../utils/webgl-detect';

/**
 * Custom hook to determine rendering tier and handle user preferences
 * @returns An object containing the current tier and functions to manage effects
 */
export const useRenderingTier = () => {
  // Initialize to tier2 (medium effects) by default
  const [tier, setTier] = useState<'tier1' | 'tier2' | 'tier3'>('tier2');
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Check for user's stored preference first
    const savedPreference = localStorage.getItem('effectsEnabled');
    if (savedPreference !== null) {
      setEffectsEnabled(savedPreference === 'true');
    }
    
    // Determine rendering tier
    const detectedTier = determineRenderingTier();
    setTier(detectedTier);
    
    // If tier1 (low-end device) and no saved preference, disable effects by default
    if (detectedTier === 'tier1' && savedPreference === null) {
      setEffectsEnabled(false);
    }
    
    setIsLoaded(true);
  }, []);
  
  // Function to toggle effects
  const toggleEffects = () => {
    const newValue = !effectsEnabled;
    setEffectsEnabled(newValue);
    localStorage.setItem('effectsEnabled', newValue.toString());
  };
  
  // Function to check if particular effects should be enabled based on tier and user preference
  const shouldEnableEffect = (
    requiredTier: 'tier1' | 'tier2' | 'tier3' = 'tier1'
  ): boolean => {
    if (!effectsEnabled) return false;
    
    // Map tiers to numeric values for comparison
    const tierValues = { tier1: 1, tier2: 2, tier3: 3 };
    const currentTierValue = tierValues[tier];
    const requiredTierValue = tierValues[requiredTier];
    
    return currentTierValue >= requiredTierValue;
  };
  
  return {
    tier,
    effectsEnabled,
    isLoaded,
    toggleEffects,
    shouldEnableEffect
  };
}; 