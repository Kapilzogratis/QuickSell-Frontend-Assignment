import React from 'react';

export const PriorityIcons = {
  Urgent: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 3v6h2V3H7zm0 8v2h2v-2H7z" fill="#FC7840"/>
    </svg>
  ),
  High: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3l5 9H3l5-9z" fill="#FC7840"/>
    </svg>
  ),
  Medium: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7H3v2h10V7z" fill="#FFB800"/>
    </svg>
  ),
  Low: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 13l-5-9h10l-5 9z" fill="#808080"/>
    </svg>
  ),
  NoPriority: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="6" stroke="#808080" strokeWidth="2"/>
    </svg>
  )
};

export const StatusIcons = {
  Backlog: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="#808080" strokeWidth="2"/>
    </svg>
  ),
  Todo: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="7" stroke="#808080" strokeWidth="2"/>
      <path d="M5 8h6" stroke="#808080" strokeWidth="2"/>
    </svg>
  ),
  InProgress: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 4v8M4 8h8" stroke="#F1CA4B" strokeWidth="2"/>
    </svg>
  ),
  Done: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 4.5l-7 7-3-3" stroke="#5E6AD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Canceled: () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4l8 8M4 12l8-8" stroke="#808080" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
};

export const DisplayIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const ChevronIcon = ({ direction = 'down' }) => {
  const rotation = direction === 'up' ? '180' : '0';
  return (
    <svg 
      width="12" 
      height="12" 
      viewBox="0 0 12 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};