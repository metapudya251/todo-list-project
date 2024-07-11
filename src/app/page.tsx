export default function Home() {
  return (
    <div>
      <div className="place-items-center">
        <div className="badge badge-accent text-lg font-semibold my-3  p-2">Belum Selesai</div>
        <label htmlFor="my-modal-4" className="btn btn-xs my-1 font-semibold float-right mt-1" data-cy="createNew">
          + Buat Task Baru
        </label>
        <div className=" grid xs:grid-cols-1 md:grid-cols-2 gap-3 "></div>
      </div>
      <div className="divider lg:divider-horizontal"> & </div>
      <div className="place-items-center">
        <div className="badge badge-primary text-lg font-semibold my-3 p-2">Sudah Selesai</div>
        <div className=" grid xs:grid-cols-1 md:grid-cols-2 gap-3 "></div>
      </div>
    </div>
  );
}
