const Vaccines = () => {
  return (
    <div class="container">
    <h1 class="main-title text-center my-3">التطعيمات</h1>
    <div class=" row">
        <table class="table table-success table-striped">
            <thead>
                <tr>
                    <th scope="col">التطعيم</th>
                    <th scope="col">العمر</th>
                    <th scope="col">المواعيد</th>
                    <th scope="col">التفاصيل</th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <th scope="row">لقاح الروتا</th>
                        <td>من عمر عام واحد إلى عام ونصف</td>
                        <td>مستشفى منوف يومى الإثنين والأربعاء</td>
                        <td>مفيد فى الوقاية من كذا وكذا.</td>
                    </tr>
            </tbody>
        </table>
    </div>
</div>
  );
};
export default Vaccines;
