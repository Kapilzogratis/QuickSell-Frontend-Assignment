export const PRIORITY_MAP = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'NoPriority'
};

export const getPriorityName = (priority) => PRIORITY_MAP[priority] || 'NoPriority';