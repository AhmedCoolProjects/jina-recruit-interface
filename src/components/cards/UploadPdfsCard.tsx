type UploadPdfsCardProps = {
  setFilesList: (files: string[]) => void;
};

export function UploadPdfsCard(props: UploadPdfsCardProps) {
  const { setFilesList } = props;
  return (
    <div>
      <input
        type="file"
        className="border-dashed
        cursor-pointer w-full
        border-2 min-h-[120px] border-blue-800"
        onChange={(e) => {
          const listFiles: string[] = [];
          for (let i = 0; i < e.target.files?.length; i++) {
            listFiles.push(URL.createObjectURL(e.target.files[i]));
          }
          setFilesList(listFiles);
        }}
        multiple
      />
    </div>
  );
}
