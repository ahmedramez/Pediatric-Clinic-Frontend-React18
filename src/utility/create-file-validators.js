export const validateName = (name) => {
  if (!name) return "هذا الحقل مطلوب";
  if (name.length < 2) return "يجب ألا يقل عدد الأحرف عن 2";
  if (name.length > 20) return "يجب ألا يزيد عدد الأحرف عن 20";
  return null;
};
