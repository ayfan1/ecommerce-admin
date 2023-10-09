"use client";

import useOrigin from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import ApiAlert from "./api-alert";

interface ApiListProps {
  entitiyName: string;
  entitiyIdName: string;
}

const ApiList: React.FC<ApiListProps> = ({ entitiyName, entitiyIdName }) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entitiyName}`}
      />
      <ApiAlert
        title="GET"
        variant="public"
        description={`${baseUrl}/${entitiyName}/{${entitiyIdName}}`}
      />
      <ApiAlert
        title="POST"
        variant="admin"
        description={`${baseUrl}/${entitiyName}`}
      />
      <ApiAlert
        title="PATCH"
        variant="admin"
        description={`${baseUrl}/${entitiyName}/{${entitiyIdName}}`}
      />
      <ApiAlert
        title="DELETE"
        variant="admin"
        description={`${baseUrl}/${entitiyName}/{${entitiyIdName}}`}
      />
    </>
  );
};

export default ApiList;
