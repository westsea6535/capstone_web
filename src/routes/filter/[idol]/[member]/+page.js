export const load = async ({ params }) => {
  return {
    selectedIdol: params.idol,
    selectedMember: params.member,
  }
}