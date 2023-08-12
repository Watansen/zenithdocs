import React from 'react';
import DocumentCard from './DocumentCard';

interface Document {
  id: string;
  title: string;
  content: string;
  accessLevel: string;
}

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  return (
    <div className="documentList">
      {documents.map((document) => (
        <DocumentCard key={document.id} document={document} />
      ))}
    </div>
  );
};

export default DocumentList;