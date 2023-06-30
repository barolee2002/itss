export interface stepsProps {
    stt: statusValue;
    name: string;
}

export type groupsProps =
    | 'Nhóm UI_UX'
    | 'Nhóm Hero'
    | 'Nhóm ITSS'
    | 'Nhóm Nhật ngành'
    | 'Nhóm Thực tập';

type statusValue = 'Todo' | 'Processing' | 'Done';
export interface ListJobProps {
    id: number | string;
    task: string;
    status: statusValue;
    start_date: Date | string;
    deadline: Date | string;
    steps: stepsProps[];
    description: string;
    workplace: 'Bách khoa' | 'Nhà riêng' | 'Công ty ABC' | string | '';
    type: 'Việc cá nhân' | 'Việc nhóm' | 'Việc được chia sẻ';
    priority: 'High' | 'Medium' | 'Normal' | 'Low' | string;
    groupname: groupsProps | '' | string;
    group_shared?: groupsProps[] | string[];
    owner?: string;
    helpers?: string[];
    review?: string;
}

export const ListJob: ListJobProps[] = [
    {
        id: 1,
        task: 'Đọc sách "Sapiens: Tóm tắt lịch sử nhân loại"',
        status: 'Todo',
        start_date: '2023-06-23T14:00',
        deadline: '2023-06-27T14:24',
        steps: [
            { stt: 'Todo', name: 'Mua sách hoặc mượn sách từ thư viện' },
            { stt: 'Todo', name: 'Đọc và tìm hiểu nội dung sách' },
        ],
        description: 'Đọc cuốn sách Sapiens về lịch sử nhân loại',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'High',
        groupname: '',
    },
    {
        id: 2,
        task: 'Chuẩn bị buổi họp dự án',
        status: 'Done',
        start_date: '2023-06-01T17:20',
        deadline: '2023-06-02T17:20',
        steps: [
            { stt: 'Done', name: 'Xác định thời gian và địa điểm họp' },
            { stt: 'Done', name: 'Chuẩn bị agenda buổi họp' },
            { stt: 'Done', name: 'Gửi thông báo cho thành viên' },
        ],
        description: 'Chuẩn bị và tổ chức buổi họp dự án',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        priority: 'Normal',
        groupname: 'Nhóm UI_UX',
        review: 'Chất lượng công việc: Công việc đã được thực hiện đúng và đạt chất lượng cao. Các bước thực hiện như xác định thời gian và địa điểm họp, chuẩn bị agenda buổi họp và gửi thông báo cho thành viên đều đã được hoàn thành.  Hiệu suất và năng suất: Công việc đã được thực hiện một cách hiệu quả và năng suất. Việc chuẩn bị và tổ chức buổi họp dự án đã được tiến hành một cách chủ động và kịp thời.',
    },
    {
        id: 3,
        task: 'Đặt lịch khám bác sĩ',
        status: 'Todo',
        start_date: '2023-06-25 15:00',
        deadline: '2023-06-30 15:00',
        steps: [
            { stt: 'Todo', name: 'Chọn bác sĩ và đặt lịch hẹn' },
            { stt: 'Todo', name: 'Chuẩn bị các thông tin cần thiết' },
        ],
        description: 'Đặt lịch khám bác sĩ cho kiểm tra sức khỏe',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'Normal',
        groupname: '',
    },
    {
        id: 4,
        task: 'Đặt vé xem phim',
        status: 'Processing',
        start_date: '2023-06-13T15:30',
        deadline: '2023-06-15T15:30',
        steps: [
            { stt: 'Done', name: 'Chọn bộ phim muốn xem' },
            { stt: 'Processing', name: 'Tìm suất chiếu phù hợp' },
            { stt: 'Processing', name: 'Đặt vé online hoặc tại rạp' },
        ],
        description: 'Đặt vé xem phim cuối tuần với bạn bè',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'Normal',
        groupname: '',
    },
    {
        id: 5,
        task: 'Hoàn thiện bài tập lớn',
        status: 'Done',
        start_date: '2023-06-15 15:00',
        deadline: '2023-06-30 15:00',
        steps: [
            { stt: 'Done', name: 'Nghiên cứu và phân tích yêu cầu' },
            { stt: 'Done', name: 'Thiết kế và triển khai giải pháp' },
            { stt: 'Done', name: 'Kiểm thử và sửa lỗi' },
        ],
        description: 'Hoàn thiện bài tập lớn môn học',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'High',
        groupname: '',
        review: 'Hoàn thành theo tiến độ: Công việc đã được hoàn thành trước thời hạn, với deadline là ngày 30 tháng 6 năm 2023 vào lúc 15:00. Chất lượng công việc: Công việc đã được thực hiện đúng và đạt chất lượng cao. Các bước thực hiện như nghiên cứu và phân tích yêu cầu, thiết kế và triển khai giải pháp, kiểm thử và sửa lỗi đều đã được hoàn thành. Hiệu suất và năng suất: Công việc đã được thực hiện một cách hiệu quả và năng suất. Việc hoàn thiện bài tập lớn môn học đã được tiến hành với sự tập trung cao độ và đáp ứng đầy đủ yêu cầu của nhiệm vụ. Độ ưu tiên: Công việc được xác định có mức độ ưu tiên cao, đòi hỏi sự chú trọng và đảm bảo hoàn thành đúng hạn.',
    },
    {
        id: 6,
        task: 'Họp nhóm dự án',
        status: 'Todo',
        start_date: '2023-06-20 12:00',
        deadline: '2023-06-20 15:00',
        steps: [
            { stt: 'Todo', name: 'Chuẩn bị agenda cuộc họp' },
            { stt: 'Todo', name: 'Gửi thông báo cho thành viên' },
            { stt: 'Todo', name: 'Tiến hành cuộc họp' },
        ],
        description: 'Họp nhóm dự án để trao đổi tiến độ và phân công công việc',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        priority: 'Normal',
        groupname: 'Nhóm Hero',
    },
    {
        id: 7,
        task: 'Mua ví mới',
        status: 'Todo',
        start_date: '2023-06-23T09:30',
        deadline: '2023-06-25T09:30',
        steps: [
            { stt: 'Todo', name: 'Tìm hiểu và chọn mẫu ví' },
            { stt: 'Todo', name: 'Đi mua ví hoặc đặt mua online' },
        ],
        description: 'Cần mua một chiếc ví mới để thay thế ví cũ',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'High',
        groupname: '',
    },
    {
        id: 8,
        task: 'Luyện tập thể dục',
        status: 'Todo',
        start_date: '2023-06-18T15:40',
        deadline: '2023-06-18T16:40',
        steps: [
            { stt: 'Todo', name: 'Chuẩn bị quần áo và dụng cụ thể dục' },
            { stt: 'Todo', name: 'Thực hiện bài tập luyện tập' },
        ],
        description: 'Luyện tập thể dục hàng ngày để duy trì sức khỏe',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'High',
        groupname: '',
    },
    {
        id: 9,
        task: 'Xem phim mới',
        status: 'Done',
        start_date: '2023-06-11T12:24',
        deadline: '2023-06-12T12:24',
        steps: [
            { stt: 'Done', name: 'Tìm hiểu và chọn bộ phim mới' },
            { stt: 'Done', name: 'Tìm suất chiếu phim' },
        ],
        description: 'Dành thời gian xem phim mới để giải trí',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'Normal',
        groupname: '',
    },
    {
        id: 10,
        task: 'Hoàn thành báo cáo',
        status: 'Todo',
        start_date: '2023-06-15 12:00',
        deadline: '2023-06-28 12:05',
        steps: [
            { stt: 'Todo', name: 'Thu thập dữ liệu' },
            { stt: 'Todo', name: 'Phân tích và xử lý dữ liệu' },
            { stt: 'Todo', name: 'Viết báo cáo' },
        ],
        description: 'Hoàn thành báo cáo tháng cho công việc',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        priority: 'Medium',
        groupname: 'Nhóm UI_UX',
    },
    {
        id: 11,
        task: 'Đặt lịch hẹn với khách hàng',
        status: 'Todo',
        start_date: '2023-06-20T11:00',
        deadline: '2023-06-22T11:00',
        steps: [
            { stt: 'Todo', name: 'Liên hệ và thống nhất thời gian' },
            { stt: 'Todo', name: 'Xác nhận địa điểm và nội dung cuộc hẹn' },
        ],
        description: 'Đặt lịch hẹn với khách hàng để thảo luận về dự án',
        workplace: 'Công ty ABC',
        type: 'Việc cá nhân',
        priority: 'Normal',
        groupname: '',
    },
    {
        id: 12,
        task: 'Dọn dẹp nhà cửa',
        status: 'Todo',
        start_date: '2023-06-17 08:00',
        deadline: '2023-06-17 10:00',
        steps: [
            { stt: 'Todo', name: 'Sắp xếp và dọn dẹp các phòng' },
            { stt: 'Todo', name: 'Vệ sinh và lau chùi nơi cần thiết' },
        ],
        description: 'Dọn dẹp nhà cửa để có không gian sạch sẽ và gọn gàng',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'Medium',
        groupname: '',
    },
    {
        id: 13,
        task: 'Tham gia khóa học online',
        status: 'Done',
        start_date: '2023-06-14T07:30',
        deadline: '2023-06-14T09:30',
        steps: [
            { stt: 'Done', name: 'Tìm hiểu và đăng ký khóa học' },
            { stt: 'Done', name: 'Hoàn thành các bài tập và bài kiểm tra' },
        ],
        description: 'Tham gia khóa học online để nâng cao kiến thức',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'Medium',
        groupname: '',
    },
    {
        id: 14,
        task: 'Lập kế hoạch du lịch',
        status: 'Todo',
        start_date: '2023-06-20T14:50',
        deadline: '2023-06-24T14:50',
        steps: [
            { stt: 'Todo', name: 'Chọn điểm đến và thời gian du lịch' },
            { stt: 'Todo', name: 'Đặt vé và book chỗ nghỉ' },
        ],
        description: 'Lập kế hoạch cho chuyến du lịch sắp tới',
        workplace: 'Công ty ABC',
        type: 'Việc cá nhân',
        priority: 'Medium',
        groupname: '',
    },
    {
        id: 15,
        task: 'Đi mua quà sinh nhật',
        status: 'Done',
        start_date: '2023-06-20T08:00',
        deadline: '2023-06-26T08:00',
        steps: [
            { stt: 'Done', name: 'Lên danh sách quà tặng' },
            { stt: 'Done', name: 'Mua quà và sắp xếp đóng gói' },
        ],
        description: 'Chuẩn bị quà sinh nhật cho người thân',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'Medium',
        groupname: '',
    },
    {
        id: 16,
        task: 'Họp dự án',
        status: 'Processing',
        start_date: '2023-06-15T16:30',
        deadline: '2023-06-21T16:30',
        steps: [
            { stt: 'Done', name: 'Chuẩn bị nội dung cuộc họp' },
            { stt: 'Processing', name: 'Tổ chức cuộc họp và ghi chú' },
        ],
        description: 'Họp dự án để trình bày tiến độ và thảo luận về các vấn đề',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        priority: 'Medium',
        groupname: 'Nhóm ITSS',
    },
    {
        id: 17,
        task: 'Thiết kế giao diện website',
        status: 'Done',
        start_date: '2023-06-20T00:00',
        deadline: '2023-06-27T00:00',
        steps: [
            { stt: 'Done', name: 'Nghiên cứu và thiết kế giao diện' },
            { stt: 'Done', name: 'Chuyển đổi thiết kế sang mã nguồn' },
        ],
        description: 'Thiết kế giao diện cho website mới',
        workplace: 'Công ty ABC',
        type: 'Việc cá nhân',
        priority: 'Medium',
        groupname: '',
    },
    {
        id: 18,
        task: 'Làm bài tập yoga',
        status: 'Todo',
        start_date: '2023-06-19T09:30',
        deadline: '2023-06-19T10:30',
        steps: [
            { stt: 'Todo', name: 'Chuẩn bị không gian và dụng cụ' },
            { stt: 'Todo', name: 'Thực hiện các động tác yoga' },
        ],
        description: 'Luyện tập yoga hàng ngày để thư giãn và tăng cường sức khỏe',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'Medium',
        groupname: '',
    },
    {
        id: 19,
        task: 'Thử nghiệm phần mềm',
        status: 'Done',
        start_date: '2023-06-20T19:30',
        deadline: '2023-06-23T19:30',
        steps: [
            { stt: 'Done', name: 'Tạo kịch bản thử nghiệm' },
            { stt: 'Done', name: 'Thực hiện thử nghiệm và ghi lại kết quả' },
        ],
        description: 'Thử nghiệm phần mềm mới trước khi triển khai',
        workplace: 'Bách khoa',
        type: 'Việc cá nhân',
        priority: 'Medium',
        groupname: '',
    },
    {
        id: 20,
        task: 'Làm việc với khách hàng',
        status: 'Processing',
        start_date: '2023-06-27T15:30',
        deadline: '2023-06-29T15:30',
        steps: [
            { stt: 'Processing', name: 'Tiếp nhận yêu cầu khách hàng' },
            { stt: 'Processing', name: 'Tư vấn và giải đáp thắc mắc' },
        ],
        description: 'Làm việc với khách hàng để đáp ứng nhu cầu và giải quyết vấn đề',
        workplace: 'Công ty ABC',
        type: 'Việc cá nhân',
        priority: 'Normal',
        groupname: '',
    },
    {
        id: 21,
        task: 'Viết báo cáo tổng kết',
        status: 'Processing',
        start_date: '2023-07-03T08:00',
        deadline: '2023-07-05T08:00',
        steps: [
            { stt: 'Done', name: 'Thu thập dữ liệu và thông tin' },
            { stt: 'Processing', name: 'Viết báo cáo và kiểm tra' },
        ],
        description: 'Viết báo cáo tổng kết về dự án XYZ',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        priority: 'High',
        groupname: 'Nhóm ITSS',
    },
    {
        id: 22,
        task: 'Tổ chức buổi team building',
        status: 'Todo',
        start_date: '2023-07-09T09:00',
        deadline: '2023-07-10T09:00',
        steps: [
            { stt: 'Todo', name: 'Lên kế hoạch và chuẩn bị hoạt động' },
            { stt: 'Todo', name: 'Thực hiện buổi team building' },
        ],
        description: 'Tổ chức buổi team building để tăng cường tinh thần đồng đội',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        priority: 'Low',
        groupname: 'Nhóm Hero',
    },
    {
        id: 23,
        task: 'Học khóa học trực tuyến',
        status: 'Processing',
        start_date: '2023-07-15T08:00',
        deadline: '2023-07-15T10:00',
        steps: [
            { stt: 'Processing', name: 'Chọn khóa học phù hợp' },
            { stt: 'Processing', name: 'Tham gia và hoàn thành khóa học' },
        ],
        description: 'Học khóa học trực tuyến để nâng cao kiến thức và kỹ năng',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'High',
        groupname: '',
    },
    {
        id: 24,
        task: 'Thiết kế giao diện website',
        status: 'Processing',
        start_date: '2023-07-15T08:00',
        deadline: '2023-07-20T08:00',
        steps: [
            { stt: 'Done', name: 'Nghiên cứu yêu cầu và thiết kế giao diện' },
            { stt: 'Processing', name: 'Phát triển và kiểm tra giao diện' },
        ],
        description: 'Thiết kế giao diện cho website mới',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        priority: 'Low',
        groupname: 'Nhóm Hero',
    },
    {
        id: 25,
        task: 'Tạo kế hoạch marketing',
        status: 'Processing',
        start_date: '2023-07-15T09:00',
        deadline: '2023-07-25T09:00',
        steps: [
            { stt: 'Processing', name: 'Nghiên cứu thị trường và đối tượng khách hàng' },
            { stt: 'Processing', name: 'Xây dựng kế hoạch marketing chi tiết' },
        ],
        description: 'Tạo kế hoạch marketing để quảng bá sản phẩm mới',
        workplace: 'Công ty ABC',
        type: 'Việc cá nhân',
        priority: 'High',
        groupname: '',
    },
    {
        id: 26,
        task: 'Triển khai hệ thống CRM',
        status: 'Done',
        start_date: '2023-07-28T10:00',
        deadline: '2023-07-30T10:00',
        steps: [
            { stt: 'Done', name: 'Chuẩn bị và cài đặt hệ thống CRM' },
            { stt: 'Done', name: 'Đào tạo nhân viên sử dụng' },
        ],
        description: 'Triển khai hệ thống CRM để quản lý khách hàng hiệu quả',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        priority: 'Low',
        groupname: 'Nhóm ITSS',
        review: 'công việc "Triển khai hệ thống CRM" đã được hoàn thành đúng tiến độ, đạt chất lượng cao và mang lại lợi ích cho công ty. Hệ thống CRM giúp công ty quản lý khách hàng hiệu quả hơn, nâng cao khả năng tương tác và tạo điều kiện thuận lợi cho việc kinh doanh.',
    },
    {
        id: 27,
        task: 'Phân tích dữ liệu thống kê',
        status: 'Todo',
        start_date: '2023-08-01T08:00',
        deadline: '2023-08-05T08:00',
        steps: [
            { stt: 'Todo', name: 'Thu thập dữ liệu từ các nguồn khác nhau' },
            { stt: 'Todo', name: 'Phân tích và xử lý dữ liệu' },
        ],
        description: 'Phân tích dữ liệu thống kê để đưa ra các thông tin quan trọng',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        priority: 'High',
        groupname: 'Nhóm Hero',
    },
    {
        id: 28,
        task: 'Xây dựng ứng dụng di động',
        status: 'Processing',
        start_date: '2023-06-10T08:00',
        deadline: '2023-08-10T08:00',
        steps: [
            { stt: 'Processing', name: 'Thiết kế giao diện và chức năng' },
            { stt: 'Processing', name: 'Phát triển và kiểm thử ứng dụng' },
        ],
        description: 'Xây dựng ứng dụng di động cho hệ điều hành iOS và Android',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        priority: 'Low',
        groupname: 'Nhóm ITSS',
    },
    {
        id: 29,
        task: 'Lập kế hoạch đào tạo nhân viên',
        status: 'Done',
        start_date: '2023-07-10T08:00',
        deadline: '2023-08-15T08:00',
        steps: [
            { stt: 'Done', name: 'Xác định nhu cầu đào tạo' },
            { stt: 'Done', name: 'Lập kế hoạch và triển khai' },
        ],
        description: 'Lập kế hoạch đào tạo nhân viên để nâng cao năng lực làm việc',
        workplace: 'Công ty ABC',
        type: 'Việc cá nhân',
        priority: 'High',
        groupname: '',
        review: 'Công việc đã được hoàn thành đúng tiến độ, đạt chất lượng cao và mang lại lợi ích cho công ty. Việc đào tạo nhân viên giúp nâng cao năng lực làm việc, cải thiện chất lượng công việc và tạo điều kiện phát triển cho nhân viên.',
    },
    {
        id: 30,
        task: 'Thiết kế logo mới',
        status: 'Todo',
        start_date: '2023-08-10T08:00',
        deadline: '2023-08-20T08:00',
        steps: [
            { stt: 'Todo', name: 'Nghiên cứu về thương hiệu và ý tưởng thiết kế' },
            { stt: 'Todo', name: 'Tạo ra các phiên bản logo' },
        ],
        description: 'Thiết kế logo mới cho công ty',
        workplace: 'Nhà riêng',
        type: 'Việc cá nhân',
        priority: 'Low',
        groupname: '',
    },
    {
        id: 31,
        task: 'Thiết kế logo',
        status: 'Todo',
        start_date: '2023-06-10 10:00',
        deadline: '2023-06-15 10:00',
        steps: [
            { stt: 'Todo', name: 'Nghiên cứu về công ty' },
            { stt: 'Todo', name: 'Thu thập ý kiến và ý tưởng' },
            { stt: 'Todo', name: 'Thiết kế và đề xuất logo' },
        ],
        description: 'Thiết kế logo cho công ty',
        priority: 'High',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm UI_UX',
    },
    {
        id: 32,
        task: 'Phân tích thị trường nông sản',
        status: 'Processing',
        start_date: '2023-07-09 15:00',
        deadline: '2023-07-10 15:00',
        steps: [
            { stt: 'Done', name: 'Thu thập dữ liệu thị trường' },
            { stt: 'Processing', name: 'Phân tích và đánh giá dữ liệu' },
            { stt: 'Processing', name: 'Lập báo cáo và đề xuất chiến lược' },
        ],
        description: 'Phân tích thị trường để đề xuất chiến lược kinh doanh',
        priority: 'High',
        workplace: 'Nhà riêng',
        type: 'Việc nhóm',
        groupname: 'Nhóm ITSS',
    },
    {
        id: 33,
        task: 'Triển khai hệ thống',
        status: 'Done',
        start_date: '2023-07-30 15:00',
        deadline: '2023-07-31 15:00',
        steps: [
            { stt: 'Done', name: 'Lập kế hoạch triển khai' },
            { stt: 'Done', name: 'Cài đặt và cấu hình hệ thống' },
            { stt: 'Done', name: 'Kiểm tra và điều chỉnh' },
        ],
        description: 'Triển khai hệ thống mới cho công ty',
        priority: 'Low',
        workplace: 'Nhà riêng',
        type: 'Việc nhóm',
        groupname: 'Nhóm Hero',
    },
    {
        id: 34,
        task: 'Tạo giao diện người dùng',
        status: 'Todo',
        start_date: '2023-06-25 14:00',
        deadline: '2023-06-30 14:00',
        steps: [
            { stt: 'Todo', name: 'Lập thiết kế giao diện' },
            { stt: 'Todo', name: 'Xác định yêu cầu chức năng' },
            { stt: 'Todo', name: 'Phát triển giao diện người dùng' },
        ],
        description: 'Tạo giao diện người dùng cho ứng dụng di động',
        priority: 'High',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm UI_UX',
    },
    {
        id: 35,
        task: 'Phân tích và cải tiến quy trình sản xuất',
        status: 'Processing',
        start_date: '2023-08-10 12:00',
        deadline: '2023-08-15 12:00',
        steps: [
            { stt: 'Done', name: 'Thu thập thông tin về quy trình sản xuất hiện tại' },
            { stt: 'Processing', name: 'Phân tích và đánh giá quy trình' },
            { stt: 'Processing', name: 'Đề xuất cải tiến và thiết kế quy trình mới' },
            { stt: 'Processing', name: 'Triển khai quy trình mới' },
        ],
        description: 'Phân tích và cải tiến quy trình sản xuất của công ty',
        priority: 'Low',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        groupname: 'Nhóm ITSS',
    },
    {
        id: 36,
        task: 'Triển khai chiến dịch marketing',
        status: 'Done',
        start_date: '2023-07-31 10:00',
        deadline: '2023-08-31 10:00',
        steps: [
            { stt: 'Done', name: 'Lập kế hoạch chiến dịch' },
            { stt: 'Done', name: 'Thiết kế và tạo nội dung marketing' },
            { stt: 'Done', name: 'Triển khai và quảng bá' },
        ],
        description: 'Triển khai chiến dịch marketing cho sản phẩm mới',
        priority: 'High',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm Hero',
        review: 'Công việc đã được hoàn thành đúng tiến độ, đạt chất lượng cao và mang lại kết quả tích cực cho công ty. Việc triển khai chiến dịch marketing góp phần quảng bá và tạo nên sự thành công cho sản phẩm mới, thu hút khách hàng và tăng doanh số bán hàng.',
    },
    {
        id: 37,
        task: 'Đào tạo nhân viên mới',
        status: 'Todo',
        start_date: '2023-07-09 15:00',
        deadline: '2023-07-10 15:00',
        priority: 'High',
        steps: [
            { stt: 'Todo', name: 'Xác định nhu cầu đào tạo' },
            { stt: 'Todo', name: 'Lập kế hoạch đào tạo' },
            { stt: 'Todo', name: 'Triển khai chương trình đào tạo' },
            { stt: 'Todo', name: 'Đánh giá kết quả đào tạo' },
        ],
        description: 'Đào tạo nhân viên mới về quy trình làm việc và kỹ năng công việc',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm Hero',
    },
    {
        id: 38,
        task: 'Xây dựng giao diện người dùng',
        status: 'Processing',
        start_date: '2023-08-18 15:00',
        deadline: '2023-08-20 15:30',
        priority: 'Low',
        steps: [
            { stt: 'Done', name: 'Thiết kế giao diện' },
            { stt: 'Done', name: 'Lập trình và phát triển' },
            { stt: 'Done', name: 'Kiểm thử và sửa lỗi' },
            { stt: 'Processing', name: 'Tối ưu hóa hiệu năng' },
        ],
        description: 'Xây dựng giao diện người dùng cho ứng dụng mới',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        groupname: 'Nhóm UI_UX',
    },
    {
        id: 39,
        task: 'Kiểm tra và nâng cấp hệ thống',
        status: 'Processing',
        start_date: '2023-07-27 20:00',
        deadline: '2023-07-31 20:00',
        priority: 'High',
        steps: [
            { stt: 'Done', name: 'Kiểm tra hiệu năng hệ thống' },
            { stt: 'Processing', name: 'Phát hiện và khắc phục lỗi' },
            { stt: 'Processing', name: 'Nâng cấp và cải tiến hệ thống' },
        ],
        description: 'Kiểm tra và nâng cấp hệ thống để đảm bảo hoạt động ổn định và hiệu quả',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm UI_UX',
    },
    {
        id: 40,
        task: 'Tổ chức sự kiện công ty',
        status: 'Done',
        start_date: '2023-08-08 09:00',
        deadline: '2023-08-10 09:00',
        priority: 'Low',
        steps: [
            { stt: 'Done', name: 'Lập kế hoạch sự kiện' },
            { stt: 'Done', name: 'Đặt địa điểm và thiết kế trang trí' },
            { stt: 'Done', name: 'Tổ chức sự kiện và quản lý' },
            { stt: 'Done', name: 'Đánh giá và rút kinh nghiệm sau sự kiện' },
        ],
        description:
            'Tổ chức sự kiện công ty nhằm tăng cường tinh thần đoàn kết và gắn kết nhân viên',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm Hero',
        review: 'Công việc đã được thực hiện một cách hiệu quả và năng suất. Sự kiện công ty đã được tổ chức thành công, tạo ra tinh thần đoàn kết và gắn kết cho nhân viên.',
    },
    {
        id: 41,
        task: 'Phân tích dữ liệu',
        status: 'Processing',
        start_date: '2023-08-23 14:00',
        deadline: '2023-09-25 14:30',
        priority: 'High',
        steps: [
            { stt: 'Done', name: 'Thu thập dữ liệu thống kê' },
            { stt: 'Processing', name: 'Phân loại và xử lý dữ liệu' },
            { stt: 'Processing', name: 'Thống kê và phân tích dữ liệu' },
            { stt: 'Processing', name: 'Tạo báo cáo và trình bày kết quả' },
        ],
        description: 'Phân tích dữ liệu thống kê cho dự án nghiên cứu',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        groupname: 'Nhóm Nhật ngành',
    },
    {
        id: 42,
        task: 'Phỏng vấn ứng viên',
        status: 'Todo',
        start_date: '2023-08-20 09:00',
        deadline: '2023-09-20 09:30',
        priority: 'Medium',
        steps: [
            { stt: 'Todo', name: 'Xem CV và đánh giá' },
            { stt: 'Todo', name: 'Liên hệ ứng viên để lịch phỏng vấn' },
            { stt: 'Todo', name: 'Tiến hành phỏng vấn' },
            { stt: 'Todo', name: 'Đánh giá và chọn ứng viên phù hợp' },
        ],
        description: 'Phỏng vấn ứng viên cho vị trí nhân viên kinh doanh',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm Nhật ngành',
    },
    {
        id: 43,
        task: 'Chuẩn bị tài liệu hội thảo',
        status: 'Todo',
        start_date: '2023-07-30 14:00',
        deadline: '2023-06-30 14:00',
        priority: 'Low',
        steps: [
            { stt: 'Todo', name: 'Thu thập thông tin liên quan' },
            { stt: 'Todo', name: 'Soạn tài liệu hội thảo' },
            { stt: 'Todo', name: 'Chuẩn bị slide thuyết trình' },
            { stt: 'Todo', name: 'In ấn tài liệu' },
        ],
        description: 'Chuẩn bị tài liệu cho buổi hội thảo về tiếp thị kỹ thuật số',
        workplace: 'Nhà riêng',
        type: 'Việc nhóm',
        groupname: 'Nhóm Thực tập',
    },
    {
        id: 44,
        task: 'Kiểm tra và sửa lỗi phần mềm',
        status: 'Processing',
        start_date: '2023-07-14 10:00',
        deadline: '2023-07-15 10:45',
        priority: 'Medium',
        steps: [
            { stt: 'Done', name: 'Phân tích và xác định lỗi' },
            { stt: 'Done', name: 'Tiến hành kiểm tra và ghi lại lỗi' },
            { stt: 'Done', name: 'Sửa lỗi và kiểm tra lại' },
            { stt: 'Processing', name: 'Kiểm tra tính năng khác sau khi sửa lỗi' },
        ],
        description: 'Kiểm tra và sửa lỗi phần mềm trước khi phát hành',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        groupname: 'Nhóm Nhật ngành',
    },
    {
        id: 45,
        task: 'Triển khai chiến dịch quảng cáo',
        status: 'Todo',
        start_date: '2023-06-20 13:00',
        deadline: '2023-06-25 13:30',
        priority: 'Low',
        steps: [
            { stt: 'Todo', name: 'Lập kế hoạch quảng cáo' },
            { stt: 'Todo', name: 'Tạo nội dung và thiết kế quảng cáo' },
            { stt: 'Todo', name: 'Chạy thử nghiệm và điều chỉnh' },
            { stt: 'Todo', name: 'Theo dõi và đánh giá hiệu quả' },
        ],
        description: 'Triển khai chiến dịch quảng cáo trực tuyến cho sản phẩm mới',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm Thực tập',
    },
    {
        id: 46,
        task: 'Lắp đặt và cấu hình mạng',
        status: 'Done',
        start_date: '2023-07-10 15:00',
        deadline: '2023-07-12 15:30',
        priority: 'Low',
        steps: [
            { stt: 'Done', name: 'Lập kế hoạch lắp đặt mạng' },
            { stt: 'Done', name: 'Lắp đặt thiết bị mạng' },
            { stt: 'Done', name: 'Cấu hình mạng và kiểm tra' },
            { stt: 'Done', name: 'Đào tạo nhân viên sử dụng' },
        ],
        description: 'Lắp đặt và cấu hình mạng cho văn phòng mới',
        workplace: 'Bách khoa',
        type: 'Việc nhóm',
        groupname: 'Nhóm Nhật ngành',
        review: 'Công việc đã được thực hiện một cách chuyên nghiệp và chất lượng. Các bước thực hiện như lập kế hoạch lắp đặt mạng, lắp đặt thiết bị mạng, cấu hình mạng và kiểm tra, đào tạo nhân viên sử dụng đều đã được hoàn thành.',
    },
    {
        id: 47,
        task: 'Thực hiện buổi workshop',
        status: 'Processing',
        start_date: '2023-07-02 16:00',
        deadline: '2023-07-05 16:30',
        priority: 'Low',
        steps: [
            { stt: 'Processing', name: 'Chuẩn bị nội dung và tài liệu' },
            { stt: 'Processing', name: 'Thiết lập không gian và trang thiết bị' },
            { stt: 'Processing', name: 'Thực hiện buổi workshop' },
            { stt: 'Processing', name: 'Thu thập phản hồi và đánh giá' },
        ],
        description: 'Thực hiện buổi workshop về quản lý thời gian và hiệu suất làm việc',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm Thực tập',
    },
    {
        id: 48,
        task: 'Tạo nội dung cho blog',
        status: 'Done',
        start_date: '2023-08-07 11:00',
        deadline: '2023-08-10 11:15',
        priority: 'Medium',
        steps: [
            { stt: 'Done', name: 'Nghiên cứu và lựa chọn chủ đề' },
            { stt: 'Done', name: 'Viết bài và chỉnh sửa' },
            { stt: 'Done', name: 'Tạo ảnh minh họa và thiết kế' },
            { stt: 'Done', name: 'Đăng bài và chia sẻ' },
        ],
        description: 'Tạo nội dung cho blog công nghệ và khám phá',
        workplace: 'Công ty ABC',
        type: 'Việc nhóm',
        groupname: 'Nhóm Nhật ngành',
        review: 'Chất lượng công việc: Công việc đã được thực hiện một cách chuyên nghiệp và chất lượng. Các bước thực hiện như nghiên cứu và lựa chọn chủ đề, viết bài và chỉnh sửa, tạo ảnh minh họa và thiết kế, đăng bài và chia sẻ đều đã được hoàn thành.',
    },
    {
        id: 49,
        task: 'Phân tích thị trường',
        status: 'Todo',
        start_date: '2023-06-10 14:00',
        deadline: '2023-07-01 14:45',
        priority: 'Low',
        steps: [
            { stt: 'Todo', name: 'Thu thập dữ liệu thị trường' },
            { stt: 'Todo', name: 'Phân tích và đánh giá dữ liệu' },
            { stt: 'Todo', name: 'Xác định cơ hội và thách thức' },
            { stt: 'Todo', name: 'Đề xuất và triển khai chiến lược' },
        ],
        description: 'Phân tích thị trường và đề xuất chiến lược phát triển sản phẩm',
        workplace: 'Nhà riêng',
        type: 'Việc nhóm',
        groupname: 'Nhóm Thực tập',
    },
    //    Việc được chia sẻ
    {
        id: 50,
        task: 'Kiểm tra hệ thống bảo mật',
        status: 'Processing',
        start_date: '2023-06-20 10:00',
        deadline: '2023-06-28 10:00',
        priority: 'Medium',
        steps: [
            { stt: 'Done', name: 'Phân tích và đánh giá hệ thống' },
            { stt: 'Processing', name: 'Kiểm tra lỗ hổng bảo mật' },
            { stt: 'Processing', name: 'Áp dụng biện pháp bảo mật' },
            { stt: 'Processing', name: 'Kiểm tra lại hiệu quả' },
        ],
        description: 'Kiểm tra và nâng cấp hệ thống bảo mật của công ty',
        workplace: '',
        type: 'Việc được chia sẻ',
        groupname: '',
        group_shared: ['Nhóm Nhật ngành'],
        owner: 'Văn Bảo',
        helpers: ['Quang Đạt'],
    },
    {
        id: 51,
        task: 'Hoàn thành bài tập lập trình',
        status: 'Processing',
        start_date: '2023-07-01T10:00',
        deadline: '2023-07-05T10:00',
        steps: [
            { stt: 'Done', name: 'Đọc yêu cầu bài tập' },
            { stt: 'Done', name: 'Viết mã lập trình' },
            { stt: 'Processing', name: 'Kiểm tra và sửa lỗi' },
            { stt: 'Processing', name: 'Nộp bài tập' },
        ],
        description: 'Làm bài tập lập trình và nộp đúng thời hạn',
        workplace: '',
        type: 'Việc được chia sẻ',
        priority: 'High',
        groupname: '',
        group_shared: ['Nhóm Nhật ngành', 'Nhóm UI_UX'],
        owner: 'Cao Kỳ',
        helpers: [],
    },

    {
        id: 52,
        task: 'Thực hiện kiểm thử sản phẩm',
        status: 'Todo',
        start_date: '2023-06-10T15:00',
        deadline: '2023-06-30T15:00',
        steps: [
            { stt: 'Todo', name: 'Xác định phạm vi kiểm thử' },
            { stt: 'Todo', name: 'Lập kế hoạch kiểm thử' },
            { stt: 'Todo', name: 'Thực hiện kiểm thử' },
            { stt: 'Todo', name: 'Ghi lại và báo cáo kết quả' },
        ],
        description: 'Tiến hành kiểm thử sản phẩm trước khi ra mắt',
        workplace: '',
        type: 'Việc được chia sẻ',
        priority: 'Normal',
        groupname: '',
        group_shared: ['Nhóm Nhật ngành', 'Nhóm ITSS', 'Nhóm Hero'],
        owner: 'Quang Đạt',
        helpers: ['Minh Dũng'],
    },
    {
        id: 53,
        task: 'Tổ chức buổi workshop',
        status: 'Todo',
        start_date: '2023-07-10T14:00',
        deadline: '2023-07-10T17:00',
        priority: 'High',
        steps: [
            { stt: 'Todo', name: 'Xác định chủ đề và nội dung workshop' },
            { stt: 'Todo', name: 'Lựa chọn địa điểm và thời gian tổ chức' },
            { stt: 'Todo', name: 'Tạo lịch trình và nội dung chi tiết' },
            { stt: 'Todo', name: 'Gửi thông báo và mời khách tham gia' },
        ],
        description: 'Tổ chức buổi workshop về kỹ năng quản lý thời gian',
        workplace: '',
        type: 'Việc được chia sẻ',
        groupname: '',
        group_shared: ['Nhóm Thực tập', 'Nhóm ITSS', 'Nhóm Nhật ngành'],
        owner: 'Quang Đạt',
        helpers: ['Hoàng Văn Thái', 'Hoàng Gia'],
    },
    {
        id: 54,
        task: 'Triển khai dự án mới',
        status: 'Todo',
        start_date: '2023-07-15T09:00',
        deadline: '2023-08-30T17:00',
        priority: 'High',
        steps: [
            { stt: 'Todo', name: 'Xác định phạm vi và yêu cầu dự án' },
            { stt: 'Todo', name: 'Lập kế hoạch và phân công công việc' },
            { stt: 'Todo', name: 'Triển khai dự án theo kế hoạch' },
            { stt: 'Todo', name: 'Kiểm tra và đánh giá kết quả' },
            { stt: 'Todo', name: 'Hoàn thiện và bàn giao dự án' },
        ],
        description: 'Triển khai dự án mới về phát triển ứng dụng di động',
        workplace: '',
        type: 'Việc được chia sẻ',
        groupname: '',
        group_shared: ['Nhóm UI_UX'],
        owner: 'Tiến Đạt',
        helpers: ['Cao Kỳ', 'Minh Dũng'],
    },
    {
        id: 55,
        task: 'Xây dựng kế hoạch marketing',
        status: 'Done',
        start_date: '2023-06-10T14:00',
        deadline: '2023-06-15T17:00',
        priority: 'Normal',
        steps: [
            { stt: 'Done', name: 'Nghiên cứu thị trường và đối tượng khách hàng' },
            { stt: 'Done', name: 'Xác định mục tiêu và chiến lược marketing' },
            { stt: 'Done', name: 'Lập kế hoạch marketing chi tiết' },
            { stt: 'Done', name: 'Thực hiện các hoạt động marketing' },
            { stt: 'Done', name: 'Đánh giá hiệu quả và điều chỉnh kế hoạch' },
        ],
        description: 'Xây dựng kế hoạch marketing để tăng doanh số bán hàng',
        workplace: '',
        type: 'Việc được chia sẻ',
        groupname: '',
        group_shared: ['Nhóm Hero'],
        owner: 'Trần Bình',
        helpers: ['Lê Cường', 'Quang Đạt'],
    },
    {
        id: 56,
        task: 'Tạo giao diện người dùng mới',
        status: 'Processing',
        start_date: '2023-06-28T09:00',
        deadline: '2023-07-10T17:00',
        priority: 'High',
        steps: [
            { stt: 'Done', name: 'Phân tích yêu cầu và thiết kế giao diện' },
            { stt: 'Processing', name: 'Xây dựng giao diện và tích hợp' },
            { stt: 'Todo', name: 'Kiểm tra và sửa lỗi giao diện' },
            { stt: 'Todo', name: 'Hoàn thiện và bàn giao giao diện' },
        ],
        description: 'Tạo giao diện người dùng mới cho ứng dụng di động',
        workplace: '',
        type: 'Việc được chia sẻ',
        groupname: '',
        group_shared: ['Nhóm UI_UX', 'Nhóm Nhật ngành'],
        owner: 'Minh Dũng',
        helpers: ['Cao Kỳ', 'Quang Đạt'],
    },
];