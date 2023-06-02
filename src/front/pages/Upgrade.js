import AppLayout from 'front/components/Layouts/front/AppLayout'

const Stories = () => (
  <AppLayout
    header={
      <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Stories
      </h2>
    }>
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
          Stories page
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
)

export default Stories
