using AutoMapper;
using Entities;
using DTOs;

namespace YDT
{
    public class AutoMapper:Profile
    {
        public AutoMapper()
        {
            CreateMap<Rav, RavDTO>()
             .ForMember(dest => dest.Shiurim, opt => opt.MapFrom(src => src.Shiurim)).ReverseMap();

            CreateMap<Shiur, ShiurDTO>()
                .ForMember(dest => dest.Topic, opt => opt.MapFrom(src => src.Topic)).ReverseMap(); 

            CreateMap<Topic, TopicDTO>().ReverseMap();
        }
    }
}
